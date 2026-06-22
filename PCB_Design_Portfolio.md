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

Custom 8-channel **8–10 kV** power supply for HASEL-actuated soft robotic fish,
replacing ~$550/channel commercial amplifier modules ($4,400 for 8 channels)
with a discrete **Cockcroft-Walton** design at $650–1,250 — a **72–85% cost
reduction** ($300/channel target). Architecture set by a Fall 2025 Preliminary
Design Review.

### PCB Design Contribution
- **Identified critical IPC-2221B violations** in the inherited 2-layer board:
  only 2–3 mm conductor spacing vs. the 8–10 mm minimum required for >5 kV.
  Compliance was physically impossible on the existing architecture.
- **Specified a 6-layer FR4-TG180 stackup** resolving creepage/clearance:
  - 8–10 mm creepage, 10–12 mm air clearance
  - **FR4-TG180** (180 °C Tg, 40–50 kV/mm dielectric, CTI ≥600 V), **2 oz
    copper** on HV layers, **ENIG** finish
  - Via stitching around HV regions, dedicated HV/LV ground-plane isolation
- **Two-domain build:** isolated LV control perfboard + enclosed HV module
  (point-to-point Cockcroft-Walton channels, HC52 20 kV connectors).
- **HV chain per channel:** 1st-stage Cockcroft-Walton (4 V→8 V) → ZVS boost
  (8–32 V→300 V, 85–92% eff) → 4-stage Cockcroft-Walton (300 V→8–10 kV);
  Vo = 2N·Vp.
- Compliance framework: **IPC-2221B, IPC-2152, IEC 61010-1, NASA EEE-INST-002**.

### Key Numbers
- 8 independent channels, 8–10 kV each
- Cost $4,400 → $650–1,250 (72–85% cut), $300/channel target
- ZVS boost 8–32 V → 300 V ±10%, 85–92% efficiency
- Phase 1 ADC calibration: R²≈1.000, residual error <0.5% (1–5 V)
- <3% output ripple target

### Phase 1 Validation (Spring 2026)
LV control brought up on **ESP32 + ADS1115** (C++/PlatformIO): calibrated ADC
voltmeter (5-point least-squares, DIVIDER_RATIO 4.1→4.776, <0.5% error) and a
closed-loop PWM capacitor-voltage regulator (IRF4905/IRL744N half-bridge,
1 kHz 8-bit PWM, 50 ms anti-shoot-through dead-time).

### PCB Visuals
- Cockcroft-Walton multiplier topology + 1st/2nd-stage schematics
- ZVS boost converter module
- 6-layer stackup with creepage/clearance annotations
- Phase 1 ESP32 + ADS1115 ADC calibration curve

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
