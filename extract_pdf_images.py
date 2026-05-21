#!/usr/bin/env python3
"""Extract images from Buck Converter PDF documentation."""

import fitz  # PyMuPDF
import os
from pathlib import Path

# Define paths
pdf_dir = Path("reference_documentation_for_projects/boost_converter")
output_dir = Path("public/projects/buck-converter")
output_dir.mkdir(parents=True, exist_ok=True)

# PDF files to process
pdf_files = [
    ("Buck Converter Project_Submission.pdf", "submission"),
    ("Class Project.pdf", "class_project")
]

def extract_images_from_pdf(pdf_path, prefix):
    """Extract all images from a PDF file."""
    print(f"\nProcessing: {pdf_path.name}")
    doc = fitz.open(pdf_path)
    image_count = 0

    for page_num in range(len(doc)):
        page = doc[page_num]
        print(f"  Page {page_num + 1}/{len(doc)}")

        # Get images on this page
        image_list = page.get_images(full=True)

        for img_index, img in enumerate(image_list):
            xref = img[0]

            # Extract image
            try:
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]

                # Create filename
                filename = f"{prefix}_page{page_num + 1:02d}_img{img_index + 1:02d}.{image_ext}"
                filepath = output_dir / filename

                # Save image
                with open(filepath, "wb") as img_file:
                    img_file.write(image_bytes)

                print(f"    [OK] Saved: {filename}")
                image_count += 1

            except Exception as e:
                print(f"    [ERROR] Error extracting image: {e}")

    doc.close()
    return image_count

def render_page_as_image(pdf_path, page_numbers, prefix):
    """Render specific PDF pages as images at high resolution."""
    print(f"\nRendering pages from: {pdf_path.name}")
    doc = fitz.open(pdf_path)

    for page_num in page_numbers:
        if page_num < 1 or page_num > len(doc):
            print(f"  [SKIP] Page {page_num} out of range")
            continue

        page = doc[page_num - 1]  # 0-indexed

        # Render at 2x resolution for better quality
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat, alpha=False)

        # Save as PNG
        filename = f"{prefix}_page{page_num:02d}.png"
        filepath = output_dir / filename
        pix.save(filepath)

        print(f"  [OK] Rendered: {filename} ({pix.width}x{pix.height})")

    doc.close()

# Main extraction process
print("="*60)
print("Buck Converter PDF Image Extraction")
print("="*60)

total_images = 0

# Extract embedded images from submission PDF
submission_pdf = pdf_dir / "Buck Converter Project_Submission.pdf"
if submission_pdf.exists():
    count = extract_images_from_pdf(submission_pdf, "submission")
    total_images += count

    # Also render key pages as full images (figures are often part of page layout)
    print("\nRendering key figure pages from submission...")
    render_page_as_image(submission_pdf, [4, 6, 8, 9, 10, 12, 14, 15, 16], "figure")
else:
    print(f"✗ Not found: {submission_pdf}")

# Extract from class project PDF
class_pdf = pdf_dir / "Class Project.pdf"
if class_pdf.exists():
    count = extract_images_from_pdf(class_pdf, "class_project")
    total_images += count
else:
    print(f"[ERROR] Not found: {class_pdf}")

print("\n" + "="*60)
print(f"Extraction complete! Total images extracted: {total_images}")
print(f"Images saved to: {output_dir.absolute()}")
print("="*60)

# List all extracted files
print("\nExtracted files:")
files = sorted(output_dir.glob("*"))
for f in files:
    size_kb = f.stat().st_size / 1024
    print(f"  - {f.name} ({size_kb:.1f} KB)")
