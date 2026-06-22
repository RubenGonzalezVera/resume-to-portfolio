# PCB Design Portfolio — Ruben Gonzalez Vera

Hardware portfolio focused on **printed circuit board design**: multilayer
stackups, high-voltage creepage/clearance, EMI shielding, power-stage layout,
and standards compliance. Tools: **Altium Designer** (primary), KiCAD, LTSpice,
PSIM, MATLAB.

Contact: rubengonvera@gmail.com · GitHub: https://github.com/RubenGonzalezVera

---

## PCB Design Skills at a Glance

| Capability | Demonstrated in |
|---|---|
| Multilayer stackup design (4- & 6-layer) | HASEL HV Supply, Digital Multimeter |
| High-voltage layout (creepage/clearance, >5 kV) | HASEL HV Supply |
| Standards compliance (IPC-2221B, IEC 62368-1, NASA EEE-INST-002) | HASEL HV Supply |
| EMI shielding (guard traces, copper pour, via stitching) | Digital Multimeter, HASEL HV Supply |
| High-current power-stage layout (4 oz copper, thermal vias) | Solar Inverter |
| Analog/digital ground separation (star-point grounding) | Digital Multimeter |
| Controlled-impedance routing (SPI/high-speed) | Digital Multimeter |
| Iterative cost-down through layout optimization | Solar Inverter (5 revs, $1,500 → $300) |
| Open-source test-fixture PCBs | Communication Protocols |

---

## 1. 8-Channel High-Voltage Power Supply for HASEL Actuators
*Team · Active · ~400 hrs · Altium 6-layer · IPC-2221B*

Custom 8-channel **10 kV** power supply for soft robotic fish locomotion,
replacing $4,400+/channel commercial amplifiers with a $650–1,250 standards-
compliant solution — a **78–89% cost reduction** ($35,200 → $650–1,250).

### PCB Design Contribution
- **Identified critical IPC-2221B violations** in an inherited 2-layer board:
  only 2–3 mm conductor spacing vs. the 8–10 mm minimum required for >5 kV.
  Standards compliance was physically impossible on the existing architecture.
- **Redesigned to a 6-layer stackup** resolving all creepage/clearance issues:
  - L1 signal/HV traces · L2 LV ground plane · L3 isolated HV power rail ·
    L4 HV ground plane · L5 signal return · L6 solder-side components
  - 8–10 mm creepage, 10–12 mm air clearance
  - **FR4-TG180** substrate (180 °C glass transition), **2 oz copper** on
    HV/signal layers, **ENIG** finish
  - Via stitching around HV regions for EMI containment
  - Dedicated HV/LV ground-plane isolation
- Compliance framework: **IPC-2221B, NASA EEE-INST-002, IEC 61010-1 / 62368-1,
  MIL-STD-202**.

### Key Numbers
- 8 independent channels, 0–10 kV each
- 6-layer IPC-2221B-compliant PCB, 8–10 mm creepage
- $379 target BOM ($750 with 2× safety margin)
- <3% output ripple target

### PCB Visuals
- 6-layer stackup cross-section with creepage/clearance annotations
- Inherited 2-layer vs. redesigned 6-layer side-by-side (2–3 mm vs. 8–10 mm)
- System architecture block diagram (Pico → optocouplers → 28VV10 → HASEL)

---

## 2. Custom Solar Power Inverter (Synchronous Boost Converter)
*Team · Complete · ~300 hrs · Altium · 5 PCB iterations*

60V/30A input → regulated 120V DC output at **90% efficiency**, 1.8 kW.
Microcontroller MPPT (Perturb & Observe) with CAN bus monitoring.

### PCB Design Contribution
- **5 PCB iterations** driving unit cost from **$1,500 → $300** (80% reduction)
  via component selection, topology optimization, and layout improvements.
- **High-current power-stage layout**: 4 oz copper on power traces, thermal
  vias to heatsink, Kelvin (4-wire) sense connections for accurate current
  sensing.
- Gate-drive layout optimized for <100 ns rise/fall while managing EMI;
  bootstrap supply for high-side N-channel MOSFET.
- CAN transceiver (MCP2551) integration for real-time telemetry.

### Key Numbers
- 90% efficiency at 1.8 kW
- 60V ±10V in / 120V ±2V out
- $300 final unit cost (BOM + PCB)
- 5 prototype revisions

### PCB Visuals
- PCB iteration comparison (trace widths, placement, copper-pour changes)
- Thermal camera images under full load
- Power-stage schematics (gate drive, sensing, protection)

---

## 3. Homebrew Digital Multimeter
*Open-Source · Complete · ~100 hrs · Altium 4-layer · EMI shielding*

Compact handheld multimeter, **4-layer PCB**, 24-bit ADC over SPI, OLED over
I2C, BLE wireless probe. **3% accuracy** across V/I/R/C/L ranges.

### PCB Design Contribution
- **4-layer stackup** with dedicated ground and power planes.
- **EMI shielding**: guard traces around sensitive analog nets, copper-pour
  shield over the ADC section, via stitching, ferrite beads + LC filtering on
  power rails.
- **Analog/digital ground separation** joined at a single star point —
  eliminated ADC jitter and measurement instability.
- **Controlled-impedance** routing for 4 MHz SPI lines.
- Multi-stage input protection layout (TVS diodes, series R, clamps).

### Key Numbers
- 4-layer PCB, 100 × 80 mm
- 3% typical accuracy, 5% max error
- 24-bit ADS1256 ADC @ 4 MHz SPI
- 20+ hr battery life, 10+ m BLE range

### PCB Visuals
- 4-layer 3D renders showing EMI shielding copper pours
- Top/bottom artwork with labeled analog/digital sections
- Subsystem schematics (power, ADC conditioning, protection, BLE)

---

## 4. Communication Protocols Rebuilt
*Open-Source · Active · ~150 hrs · KiCAD / Altium test fixtures*

Five protocols (I2C, SPI, UART, CAN, USB) reconstructed from first principles
in bare-metal C, validated on **open-source PCB test fixtures**.

### PCB Design Contribution
- Designed **4 PCB test fixtures** (one per protocol family), published as
  open-source KiCAD/Altium projects for educational use.
- Diagnosed breadboard signal-integrity failures (long traces, race
  conditions) and resolved them in PCB with **proper ground planes, shorter
  trace lengths, and pull-up placement**.
- Power routing and signal-integrity considerations validated against
  oscilloscope + logic-analyzer captures.

### Key Numbers
- 5 working PCB designs with full schematics
- 100% protocol compliance verified by logic analyzer
- Open-source (downloadable KiCAD/Altium projects)

---

## Design Foundation (No PCB Fabricated)

### Feedback-Controlled Buck Converter
*Open-Source · Complete · ~100 hrs · MATLAB / LTSpice*

75W buck converter with Type III PID compensator — **45° phase margin,
16.6 dB gain margin**, 12V ±1% regulation. Complete small-signal modeling
(Gvd, Gvg, Zo), Bode analysis, and closed-loop LTSpice verification.

> **Note:** Design and analysis only — **no physical PCB was fabricated.**
> Included here because the power-electronics and control methodology directly
> fed the Solar Inverter boost-converter PCB work above.

---

## Summary

| Project | PCB Type | Tool | Status |
|---|---|---|---|
| HASEL HV Supply | 6-layer, HV, IPC-2221B | Altium | Active |
| Solar Inverter | Multilayer, high-current, 4 oz Cu | Altium | Complete |
| Digital Multimeter | 4-layer, EMI-shielded | Altium | Complete |
| Comm. Protocols | Test fixtures (×4) | KiCAD/Altium | Active |
| Buck Converter | *Design only — no fab* | LTSpice/MATLAB | Complete |
