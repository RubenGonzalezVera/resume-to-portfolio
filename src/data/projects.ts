export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  hours: number;
  type: "Open-Source" | "Team";
  status: "Active" | "Complete";
  highlights: string[];
  overview: {
    fullDescription: string[];
    goals: string[];
    timeline: string;
  };
  technicalDetails: {
    subsystems: {
      title: string;
      description: string;
    }[];
    tools: string[];
    approach: string;
  };
  challenges: {
    challenge: string;
    solution: string;
  }[];
  outcomes: {
    results: string[];
    metrics: string[];
    futureWork?: string;
    links?: {
      github?: string;
      documentation?: string;
    };
  };
  visualPlaceholders: {
    title: string;
    description: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "communication-protocols",
    title: "Communication Protocols Rebuilt",
    description:
      "Reconstructed 5 communication protocols (I2C, SPI, UART, CAN, USB) from first principles using bare-metal C programming with oscilloscope verification.",
    tags: ["C", "Bare-Metal", "I2C", "SPI", "UART", "CAN", "USB"],
    hours: 150,
    type: "Open-Source",
    status: "Active",
    highlights: [
      "Fabricated test circuits using breadboard prototyping to validate protocol implementations",
      "Generated downloadable open-source PCB designs with KiCAD/Altium for educational use",
    ],
    overview: {
      fullDescription: [
        "This open-source educational project explores the fundamental building blocks of embedded systems by implementing five essential communication protocols from scratch. Rather than relying on hardware abstraction layers or vendor libraries, each protocol was carefully reconstructed using bare-metal C programming to understand the timing, signaling, and data handling at the lowest possible level.",
        "The project serves as both a learning resource and a practical reference implementation, demonstrating how microcontrollers communicate with peripherals, sensors, and other devices in real-world embedded systems.",
        "All implementations were verified using oscilloscope measurements to ensure proper timing and signal integrity, with accompanying PCB designs published for community use.",
      ],
      goals: [
        "Understand communication protocols at the register level without abstraction",
        "Create educational resources for embedded systems students",
        "Develop reusable, well-documented code examples",
        "Design practical PCB test fixtures for protocol validation",
      ],
      timeline: "~150 hours over 6 months (ongoing)",
    },
    technicalDetails: {
      subsystems: [
        {
          title: "I2C (Inter-Integrated Circuit)",
          description:
            "Implemented master and slave modes with proper clock stretching, multi-master arbitration, and 7-bit/10-bit addressing. Handles START/STOP conditions, ACK/NACK signaling, and supports standard (100kHz) and fast mode (400kHz) speeds.",
        },
        {
          title: "SPI (Serial Peripheral Interface)",
          description:
            "Full-duplex communication with configurable clock polarity (CPOL) and phase (CPHA) for all four SPI modes. Implemented hardware chip select management and DMA-based transfers for high-speed data streaming.",
        },
        {
          title: "UART (Universal Asynchronous Receiver-Transmitter)",
          description:
            "Software-based baud rate generation with automatic timing calibration. Supports configurable data bits (5-9), parity (even/odd/none), stop bits, and hardware/software flow control (RTS/CTS, XON/XOFF).",
        },
        {
          title: "CAN (Controller Area Network)",
          description:
            "Implemented CAN 2.0B protocol with standard and extended identifiers. Features include bit stuffing, CRC calculation, error detection/handling, and arbitration for multi-node communication. Tested with automotive-grade transceivers.",
        },
        {
          title: "USB (Universal Serial Bus)",
          description:
            "USB 2.0 Full Speed device implementation including descriptor handling, enumeration process, and bulk transfer endpoints. Handles SETUP transactions, control transfers, and device state management according to USB specification.",
        },
      ],
      tools: [
        "STM32 microcontrollers (bare-metal register programming)",
        "Rigol DS1054Z oscilloscope for signal analysis",
        "Saleae Logic Analyzer for protocol decoding",
        "KiCAD and Altium Designer for PCB design",
        "Git for version control and documentation",
      ],
      approach:
        "Each protocol was implemented in phases: (1) study specification documents, (2) implement core functionality in C with direct register access, (3) verify timing with oscilloscope, (4) test with real peripherals, (5) design PCB test fixtures, (6) document and publish open-source.",
    },
    challenges: [
      {
        challenge: "Achieving precise timing for protocols without hardware peripherals",
        solution:
          "Used timer-based interrupts and assembly language optimization for critical timing sections. Calibrated delays using oscilloscope measurements and adjusted for clock variations.",
      },
      {
        challenge: "Debugging intermittent communication failures on breadboard prototypes",
        solution:
          "Identified race conditions and signal integrity issues caused by long breadboard traces. Added pull-up resistors, reduced trace lengths, and implemented proper ground planes in final PCB designs.",
      },
      {
        challenge: "Understanding complex USB enumeration and descriptor handling",
        solution:
          "Created detailed state machine diagrams and used USB packet analyzers to compare implementation with working devices. Iteratively refined descriptor structures and timing.",
      },
    ],
    outcomes: {
      results: [
        "Successfully implemented all 5 communication protocols from first principles",
        "Created comprehensive documentation with timing diagrams and code examples",
        "Published open-source repository with MIT license for educational use",
        "Designed 4 PCB test fixtures available as KiCAD/Altium projects",
        "Validated implementations with real-world sensors and peripherals",
      ],
      metrics: [
        "~2,000 lines of documented bare-metal C code",
        "100% protocol compliance verified with logic analyzer",
        "5 working PCB designs with full schematics",
        "150+ hours of development and testing",
      ],
      futureWork:
        "Planning to add Ethernet (MAC/PHY), PCIe, and I3C protocols. Considering video tutorial series.",
      links: {
        github: "https://github.com/rubengonvera",
      },
    },
    visualPlaceholders: [
      {
        title: "Oscilloscope Captures",
        description:
          "Signal timing measurements for I2C clock stretching, SPI data transfers, UART framing, CAN arbitration, and USB packet transactions",
      },
      {
        title: "PCB Designs",
        description:
          "3D renders and layouts of test fixture boards for each protocol with proper power routing and signal integrity considerations",
      },
      {
        title: "Wiring Diagrams",
        description:
          "Breadboard prototyping schematics showing connections between microcontroller and test peripherals",
      },
      {
        title: "Protocol Timing Diagrams",
        description:
          "Annotated timing diagrams showing START/STOP conditions, clock edges, data valid windows, and control signals",
      },
    ],
  },
  {
    slug: "digital-multimeter",
    title: "Homebrew Digital Multimeter",
    description:
      "Compact multimeter using I2C/SPI protocols for ADC and OLED display, achieving 3% error rate with wireless Bluetooth probe unit.",
    tags: ["Altium", "I2C", "SPI", "BLE", "EMI Shielding"],
    hours: 100,
    type: "Open-Source",
    status: "Complete",
    highlights: [
      "Designed 4-layer PCB with EMI shielding in Altium",
      "Integrated voltage, current, resistance, capacitance and inductance measurements",
    ],
    overview: {
      fullDescription: [
        "A custom-built digital multimeter that combines precision measurement capabilities with modern wireless technology. This project demonstrates advanced PCB design techniques, analog circuit design, and wireless communication in a compact handheld form factor.",
        "The device features a high-resolution ADC connected via SPI, an OLED display driven by I2C, and a Bluetooth Low Energy (BLE) module enabling wireless probe operation for safer measurements in high-voltage or hard-to-reach locations.",
        "Special attention was paid to EMI shielding, proper grounding, and analog/digital signal separation to achieve consistent 3% measurement accuracy across all ranges.",
      ],
      goals: [
        "Create a practical, portable measurement tool for electronics projects",
        "Learn advanced PCB design techniques including EMI shielding",
        "Implement wireless connectivity for remote/safer measurements",
        "Achieve accuracy comparable to commercial entry-level multimeters",
      ],
      timeline: "~100 hours over 4 months",
    },
    technicalDetails: {
      subsystems: [
        {
          title: "4-Layer PCB with EMI Shielding",
          description:
            "Designed in Altium Designer with dedicated ground and power planes. Implemented guard traces around sensitive analog signals, copper pour shielding over ADC section, and proper via stitching to minimize electromagnetic interference. Used controlled impedance traces for high-speed SPI lines.",
        },
        {
          title: "High-Resolution ADC and Signal Conditioning",
          description:
            "24-bit Sigma-Delta ADC (ADS1256) communicating via SPI at 4 MHz. Multi-stage input protection with TVS diodes, series resistors, and clamping circuits. Precision voltage dividers and current shunt resistors with 0.1% tolerance for accurate measurements across ranges.",
        },
        {
          title: "OLED Display Interface",
          description:
            "128x64 pixel OLED display (SSD1306) controlled via I2C. Custom graphics rendering for real-time waveform display, bar graphs, and numeric readouts. Low-power driver implementation for extended battery life.",
        },
        {
          title: "Bluetooth Low Energy Communication",
          description:
            "Nordic nRF52832 SoC for wireless probe connectivity. Custom GATT profile for streaming measurement data and remote control. Implements secure pairing and automatic reconnection with low latency (<50ms) for real-time monitoring.",
        },
        {
          title: "Multi-Range Measurement Circuits",
          description:
            "Voltage measurement: Auto-ranging 0-600V with precision dividers. Current measurement: 0-10A with shunt resistors and op-amp amplification. Resistance: 4-wire Kelvin measurement for <1Ω. Capacitance/Inductance: Time-constant measurement circuits with calibrated RC/RL references.",
        },
      ],
      tools: [
        "Altium Designer for PCB schematic and layout",
        "LTSpice for circuit simulation and analysis",
        "Oscilloscope and spectrum analyzer for EMI testing",
        "3D printer for enclosure prototyping",
        "Nordic SDK for BLE firmware development",
      ],
      approach:
        "Iterative design process: (1) circuit simulation in LTSpice, (2) breadboard validation of each subsystem, (3) first PCB revision with test points, (4) EMI characterization and shielding improvements, (5) final revision with optimized layout and enclosure integration.",
    },
    challenges: [
      {
        challenge: "EMI noise causing measurement instability and ADC jitter",
        solution:
          "Redesigned PCB with dedicated analog ground plane isolated from digital ground at single star point. Added copper shielding over ADC with via stitching. Implemented LC filtering on power rails and ferrite beads on signal lines.",
      },
      {
        challenge: "Achieving 3% accuracy across wide measurement ranges",
        solution:
          "Implemented software calibration routines using precision references. Added temperature compensation for ADC and voltage reference. Used 0.1% tolerance resistors for critical dividers and shunts. Performed multi-point calibration at different ranges.",
      },
      {
        challenge: "Power management for wireless probe with acceptable battery life",
        solution:
          "Implemented intelligent sleep modes with wake-on-measurement. Used BLE connection interval optimization (30ms active, 1s idle). Designed ultra-low quiescent current LDO regulators and power switching for unused peripherals.",
      },
    ],
    outcomes: {
      results: [
        "Fully functional handheld multimeter with wireless probe capability",
        "Achieved 3% measurement accuracy across all ranges",
        "4-layer PCB with professional EMI shielding implementation",
        "BLE wireless range of 10+ meters in typical environments",
        "Battery life of 20+ hours on 18650 Li-ion cell",
        "Measures voltage, current, resistance, capacitance, and inductance",
      ],
      metrics: [
        "3% typical accuracy, 5% maximum error",
        "10+ meter wireless range",
        "20+ hour battery life",
        "100+ hour development time",
        "4-layer PCB, 100x80mm form factor",
      ],
      links: {
        github: "https://github.com/rubengonvera",
      },
    },
    visualPlaceholders: [
      {
        title: "PCB Renders and Layouts",
        description:
          "3D renders showing 4-layer stackup, component placement, and EMI shielding copper pours. Top and bottom layer artwork with labeled sections.",
      },
      {
        title: "Circuit Schematics",
        description:
          "Detailed schematics for each subsystem: power supply, ADC signal conditioning, input protection, display interface, and BLE module connections.",
      },
      {
        title: "Enclosure Design",
        description:
          "3D-printed case design with LCD cutout, probe storage, and access ports. Exploded view showing PCB mounting and battery compartment.",
      },
      {
        title: "Measurement Accuracy Graphs",
        description:
          "Test data plots showing measured vs. reference values across voltage/current/resistance ranges with error percentages.",
      },
    ],
  },
  {
    slug: "solar-inverter",
    title: "Custom Solar Power Inverter",
    description:
      "Custom 60V/30A Input Synchronous Boost-Converter PCB design outputting 120V DC steady state with 90% efficiency.",
    tags: ["Power Electronics", "Altium", "CAN", "Agile"],
    hours: 300,
    type: "Team",
    status: "Complete",
    highlights: [
      "Encoded Perturb and Observe algorithm with 4 students using Agile techniques for 90% power efficiency",
      "Iterated over 5 prototypes to reduce unit cost from $1,500 to $300, with CAN protocol implementation",
    ],
    overview: {
      fullDescription: [
        "A high-power DC-DC boost converter prototype designed for solar energy systems, capable of stepping up 60V/30A solar panel input to regulated 120V DC output. Building on DC-DC converter design principles from academic coursework (including buck converter control system design), this team project scaled up to real-world solar applications, demonstrating advanced power electronics design, MPPT algorithm implementation, and iterative hardware development.",
        "Over the course of five prototype iterations, the team successfully reduced the unit cost by 80% (from $1,500 to $300) while maintaining 90% power conversion efficiency through careful component selection, topology optimization, and PCB layout improvements. The systematic design methodology from previous power electronics coursework—including small-signal modeling and feedback control theory—proved invaluable in developing the boost converter's control architecture.",
        "The converter features a microcontroller-based control system with CAN bus communication for monitoring and integration into larger solar power systems, along with comprehensive safety features including over-current, over-voltage, and thermal protection.",
      ],
      goals: [
        "Design a high-efficiency boost converter for solar applications",
        "Implement MPPT algorithm for maximum energy harvest",
        "Reduce prototype cost through design optimization",
        "Gain experience in team-based hardware development using Agile",
      ],
      timeline: "~300 hours over 8 months (4-person team)",
    },
    technicalDetails: {
      subsystems: [
        {
          title: "Synchronous Boost Converter Topology",
          description:
            "Two-switch synchronous boost architecture with high-side and low-side N-channel MOSFETs (IRFB4110PBF). Operates at 50kHz switching frequency for balance between efficiency and component size. Custom gate drive circuits with bootstrap supply for high-side driver. Magnetic components designed for continuous conduction mode (CCM) with 30A peak current.",
        },
        {
          title: "MPPT Algorithm (Perturb and Observe)",
          description:
            "Microcontroller-based (STM32F4) implementation of Perturb and Observe algorithm running at 100Hz update rate. Monitors input voltage/current and output power to dynamically adjust duty cycle for maximum power point tracking. Includes adaptive step size for fast convergence and reduced oscillation around MPP.",
        },
        {
          title: "Power MOSFET Selection and Gate Drive",
          description:
            "Selected MOSFETs with low RDS(on) (4.1mΩ) and fast switching characteristics to minimize conduction and switching losses. Designed gate drive circuit with IR2110 high/low side driver, optimized gate resistors for <100ns rise/fall times while managing EMI. Bootstrap capacitor sized for continuous high-side operation.",
        },
        {
          title: "CAN Bus Communication",
          description:
            "Integrated MCP2551 CAN transceiver for real-time monitoring and control. Broadcasts voltage, current, power, temperature, and fault status at 10Hz. Accepts remote commands for enable/disable, MPPT mode selection, and parameter adjustment. Implements CAN 2.0B protocol with 500kbps bit rate.",
        },
        {
          title: "Thermal Management and Efficiency Optimization",
          description:
            "Designed PCB with 4oz copper on power traces and thermal vias to heatsink. Implemented forced air cooling with temperature-controlled fan. Optimized dead-time to minimize shoot-through while reducing body diode conduction losses. Achieved 90% efficiency through careful component selection and layout.",
        },
      ],
      tools: [
        "Altium Designer for PCB schematic and layout",
        "LTSpice and PSIM for power stage simulation",
        "Electronic load and power analyzer for efficiency testing",
        "Thermal camera for hotspot identification",
        "Oscilloscope with current probes for switching analysis",
        "STM32CubeIDE for firmware development",
        "Jira for Agile sprint planning and task tracking",
      ],
      approach:
        "Agile development with 2-week sprints: Each prototype iteration included design review, simulation, PCB fabrication, bring-up testing, and retrospective. Team divided responsibilities: power stage design, control firmware, testing/validation, and cost analysis. Regular sprint reviews ensured alignment on efficiency and cost reduction goals.",
    },
    challenges: [
      {
        challenge: "Reducing unit cost from $1,500 to $300 while maintaining performance",
        solution:
          "Analyzed BOM cost drivers and identified expensive components (inductor, capacitors, MOSFETs). Switched from custom magnetics to off-the-shelf inductors with acceptable core loss. Replaced high-end film capacitors with properly-derated electrolytics. Used automotive-qualified MOSFETs instead of aerospace-grade parts. Negotiated bulk pricing for PCB fabrication.",
      },
      {
        challenge: "Achieving 90% efficiency target at high power levels (1.8kW)",
        solution:
          "Performed detailed loss analysis: conduction losses, switching losses, gate drive losses, and magnetic losses. Optimized MOSFET selection for lowest RDS(on) x Qg product. Reduced switching frequency from 100kHz to 50kHz to cut switching losses. Improved PCB layout with 4oz copper and kelvin connections for accurate sensing. Implemented synchronous rectification with optimized dead-time.",
      },
      {
        challenge: "Coordinating 4-person team across multiple hardware iterations",
        solution:
          "Adopted Agile/Scrum methodology with defined roles: Scrum Master, power electronics lead, firmware lead, and test engineer. Used Jira for sprint planning and task assignment. Held daily standups and bi-weekly sprint reviews. Maintained shared Git repository for firmware and design files. Created comprehensive test procedures to validate each prototype iteration.",
      },
    ],
    outcomes: {
      results: [
        "Successfully developed 60V/30A to 120V DC boost converter prototype",
        "Achieved 90% power conversion efficiency at rated load",
        "Reduced unit cost by 80% over 5 prototype iterations ($1,500 → $300)",
        "Implemented working MPPT algorithm with <1% power loss from ideal MPP",
        "Integrated CAN bus communication for system monitoring and control",
        "Completed team-based development using Agile methodology",
      ],
      metrics: [
        "90% power conversion efficiency at 1.8kW output",
        "60V ±10V input range, 30A maximum input current",
        "120V ±2V output regulation",
        "$300 unit cost (BOM + PCB)",
        "5 prototype iterations",
        "300+ combined team hours",
      ],
      futureWork:
        "Potential enhancements include: true DC-AC inverter stage for 120V/240V AC output, grid-tie synchronization, battery charging integration, and weatherproof enclosure for outdoor installation.",
      links: {
        github: "https://github.com/rubengonvera",
      },
    },
    visualPlaceholders: [
      {
        title: "Prototype Photos",
        description:
          "Photos of all 5 prototype iterations showing evolution of design, component placement, and heatsink solutions.",
      },
      {
        title: "Power Stage Schematics",
        description:
          "Detailed schematics of boost converter power stage, gate drive circuits, sensing networks, and protection circuits.",
      },
      {
        title: "Efficiency Curves",
        description:
          "Graphs showing efficiency vs. output power and input voltage across operating range. Comparison between prototype iterations.",
      },
      {
        title: "Thermal Testing Results",
        description:
          "Thermal camera images showing temperature distribution under full load. Plots of junction temperature vs. ambient temperature.",
      },
      {
        title: "PCB Iteration Comparison",
        description:
          "Side-by-side comparison of PCB layouts across 5 iterations highlighting optimization changes: trace widths, component placement, copper pour improvements.",
      },
      {
        title: "Team Collaboration Workflow",
        description:
          "Jira sprint board screenshots, Git contribution graphs, and team workflow diagrams showing Agile development process.",
      },
    ],
  },
  {
    slug: "buck-converter",
    title: "Feedback-Controlled Buck Converter",
    description:
      "75W buck converter with PID feedback control achieving 12V±1% output regulation, featuring small-signal modeling, frequency-domain compensation design, and closed-loop verification.",
    tags: ["Power Electronics", "Control Systems", "Analog Design", "MATLAB", "LTSpice", "PID Control", "Op-Amp Circuits"],
    hours: 100,
    type: "Open-Source",
    status: "Complete",
    highlights: [
      "Designed PID compensator achieving 45° phase margin and 16.6 dB gain margin for stable voltage regulation",
      "Performed complete small-signal analysis with Bode plots and transfer function derivation in MATLAB",
    ],
    overview: {
      fullDescription: [
        "A comprehensive 75W buck converter design project from Power Electronics I (EEL 4242C) that demonstrates systematic DC-DC converter design methodology. This academic project provided foundational knowledge in power electronics, small-signal modeling, and feedback control theory that was later applied to the Custom Solar Power Inverter boost converter project.",
        "The design process followed an 8-step methodology: steady-state parameter calculation, small-signal transfer function derivation (Gvd, Gvg, Zo), Bode plot analysis, PID compensator design with pole-zero placement, loop gain verification, op-amp circuit implementation, complete feedback system integration, and closed-loop simulation verification. The converter successfully regulates 35V input to 12V±1% output using a Type III compensator topology.",
        "The systematic design methodology learned here—from steady-state analysis through small-signal modeling to compensator implementation—formed the basis for the high-power boost converter development in the solar inverter team project. This progression demonstrates the application of control theory principles from academic coursework to real-world engineering challenges.",
      ],
      goals: [
        "Design stable voltage regulation circuit meeting ±1% output tolerance specification",
        "Achieve maximum crossover frequency (20 kHz) while maintaining ≥30° phase margin",
        "Implement PID compensator using practical op-amp circuit with calculated component values",
        "Verify closed-loop response to input voltage and load current transients through simulation",
        "Demonstrate frequency-domain and time-domain analysis proficiency using MATLAB and LTSpice",
      ],
      timeline: "~100 hours including coursework, design iterations, MATLAB analysis, circuit implementation, and comprehensive documentation",
    },
    technicalDetails: {
      subsystems: [
        {
          title: "Buck Converter Power Stage",
          description:
            "Synchronous buck topology with 35V input, 12V output at 75W (4A load). Operating at 150 kHz switching frequency with L=100µH inductor and C=47µF output capacitor. ESR of 10mΩ provides damping. Designed for continuous conduction mode (CCM) with calculated Lcrit=6.77µH, well below the 100µH inductance used. Duty cycle D=0.343 (34.3%) derived from steady-state voltage conversion ratio.",
        },
        {
          title: "Small-Signal Modeling & Transfer Functions",
          description:
            "Derived control-to-output transfer function Gvd(s) with DC gain G0=35V and resonant frequency f0=2321 Hz. Line-to-output transfer function Gvg(s) has DC gain of 0.343 (-9.29 dB). Quality factor Q=2.06 indicates underdamped LC response. ESR zero at fz=339 kHz provides high-frequency phase boost. Complete small-signal model includes output impedance Zo(s) characterization for load regulation analysis.",
        },
        {
          title: "PID Compensator Design & Pole-Zero Placement",
          description:
            "Type III compensator with strategically placed poles and zeros: low-frequency zero at fL=1.67 kHz (below fc/10) for DC gain, compensator zero at f0=2.3 kHz to cancel LC double pole, first pole at fp1=40 kHz (2×fc) for roll-off, and second pole at fp2=75 kHz (fs/2) for noise attenuation. Mid-band gain Gcm=10 (20 dB) calculated to achieve unity loop gain at 20 kHz crossover frequency. Final design meets 45° phase margin and 16.6 dB gain margin specifications.",
        },
        {
          title: "Voltage Sensing Network",
          description:
            "Resistive voltage divider with transfer function H(s)=5/12 to scale 12V output down to 5V reference voltage level. Designed with R3=14kΩ and R4=10kΩ providing appropriate impedance for op-amp input while minimizing power dissipation. The sensing network feeds into the error amplifier which compares sensed voltage against 5V reference (Vref) to generate error signal for compensator.",
        },
        {
          title: "PWM Modulator & Gate Drive",
          description:
            "Sawtooth PWM modulator with Vm=1V amplitude operating at fs=150 kHz switching frequency. Modulator gain Fm=1/Vm=1 V⁻¹. Compares compensator output against sawtooth ramp to generate duty cycle command for MOSFET gate drivers. The switching frequency was selected to balance efficiency (minimize switching losses) with component size (enable smaller magnetics) while staying below 1/10 of the ESR zero frequency to avoid right-half-plane zero issues.",
        },
        {
          title: "Simulation & Verification",
          description:
            "Complete closed-loop system simulated in LTSpice to verify transient response and regulation performance. Simulation confirmed 12V output with <1% steady-state error and stable response to input voltage steps (35V nominal) and load current steps (3A to 4A). MATLAB Bode plot analysis verified compensated loop gain crossover at 20 kHz with 45° phase margin, validating analytical design against simulation results. Note: Physical PCB has not been fabricated—this project demonstrates design and analysis methodology.",
        },
      ],
      tools: [
        "MATLAB (Transfer function analysis, Bode plots, pole-zero placement)",
        "LTSpice (Circuit simulation, transient analysis, closed-loop verification)",
        "Op-Amp circuits (TL072 or equivalent for error amplifier and compensator)",
        "Oscilloscope (For planned waveform measurements)",
        "Hand calculations (Steady-state analysis, component selection)",
      ],
      approach:
        "Followed systematic 8-step design methodology starting with steady-state analysis to determine duty cycle and verify CCM operation. Derived complete small-signal model including Gvd, Gvg, and Zo transfer functions with quality factor and pole/zero frequencies. Generated Bode plots in MATLAB to visualize uncompensated loop gain and identify compensation requirements. Designed Type III PID compensator using pole-zero placement technique to achieve maximum crossover frequency while meeting phase margin specification. Implemented compensator using op-amp circuit with calculated component values (R=10kΩ, R1=560Ω, C1=6.86nF, C2=22pF, C3=22pF). Integrated voltage sensing, error amplifier, compensator, and modulator into complete feedback control system. Verified design through closed-loop LTSpice simulation showing regulation performance under input and load transients.",
    },
    challenges: [
      {
        challenge:
          "Achieving sufficient phase margin with LC output filter creating double pole at 2.3 kHz, resulting in -180° phase shift that threatened loop stability",
        solution:
          "Placed compensator zero exactly at LC resonant frequency (fz=2.3 kHz) to cancel the double pole effect, recovering +90° of phase. Added two high-frequency poles at 40 kHz and 75 kHz to provide necessary roll-off while maintaining 45° phase margin at 20 kHz crossover—exceeding the 30° minimum specification by 50%.",
      },
      {
        challenge:
          "Selecting optimal crossover frequency to maximize bandwidth without compromising stability, while staying below switching frequency to avoid aliasing and noise coupling",
        solution:
          "Targeted fc=20 kHz, which is 1/7.5 of the 150 kHz switching frequency, providing adequate separation from switching harmonics. Used systematic pole-zero placement with low-frequency zero at fc/12 for DC gain boost, compensator zero at resonance for pole cancellation, and high-frequency poles at 2×fc and fs/2 for controlled roll-off. MATLAB analysis confirmed 45° phase margin and 16.6 dB gain margin.",
      },
      {
        challenge:
          "Translating s-domain compensator transfer function Gc(s) into practical op-amp circuit with discrete resistor and capacitor values available in standard E24 series",
        solution:
          "Used Type III compensator topology (inverting op-amp with RC networks) and derived component values from pole/zero frequencies: R=10kΩ (chosen first), R1=560Ω for mid-band gain, C1=6.86nF for low-frequency zero, C2=22pF and C3=22pF for high-frequency poles. Verified op-amp circuit transfer function matches theoretical Gc(s) through hand calculations and MATLAB simulation before integrating into complete feedback system.",
      },
    ],
    outcomes: {
      results: [
        "Successfully designed buck converter meeting 12V ± 1% output voltage regulation specification",
        "Achieved 45° phase margin (50% above minimum 30° requirement) ensuring robust stability",
        "Obtained 16.6 dB gain margin providing excellent disturbance rejection capability",
        "Maximized crossover frequency at 20 kHz (1/7.5 of switching frequency) for fast transient response",
        "Completed comprehensive MATLAB transfer function analysis with Bode plots validating design",
        "Verified closed-loop performance in LTSpice simulation showing stable regulation under transients",
        "Generated complete design documentation with schematics, calculations, and analysis results",
      ],
      metrics: [
        "Output voltage regulation: 12V ± 1% (120 mV tolerance)",
        "Phase margin: 45° (specification: ≥30°)",
        "Gain margin: 16.6 dB (robust stability)",
        "Crossover frequency: 20 kHz (maximum achievable)",
        "Switching frequency: 150 kHz",
        "Quality factor: Q = 2.06 (LC resonance)",
        "Power rating: 75W (35V input, 12V @ 4A output)",
        "Duty cycle: 34.3% (D = 0.343)",
      ],
      futureWork:
        "The control theory and power electronics principles from this academic project were directly applied to design the 60V/30A boost converter in the Custom Solar Power Inverter, scaling up to real-world solar applications. Future enhancements could include PCB fabrication and hardware validation, digital compensator implementation using microcontroller, adaptive compensation for variable load conditions, and integration with current-mode control for improved performance.",
      links: {
        github: "https://github.com/RubenGonzalezVera",
      },
    },
    visualPlaceholders: [
      {
        title: "Power Stage Schematic",
        description:
          "Buck converter circuit diagram showing L=100µH inductor, C=47µF capacitor, switching MOSFETs, and 35V→12V voltage conversion topology with component labels and current paths.",
      },
      {
        title: "Control-to-Output Transfer Function",
        description:
          "Bode magnitude and phase plots for Gvd(s) showing DC gain of 30.88 dB, LC double pole at 2.3 kHz with -40 dB/decade roll-off, and ESR zero at 339 kHz providing phase boost.",
      },
      {
        title: "Compensator Design Calculations",
        description:
          "Hand-written calculations and LaTeX equations showing pole-zero placement strategy, frequency selection rationale, and mid-band gain derivation for Type III compensator achieving target crossover and phase margin.",
      },
      {
        title: "Compensated Loop Gain Bode Plot",
        description:
          "MATLAB-generated Bode plot of T(s)=Gc(s)·Fm·Gvd(s)·H showing 20 kHz crossover frequency, 45° phase margin (marked), 16.6 dB gain margin, and comparison with uncompensated loop gain demonstrating compensation effectiveness.",
      },
      {
        title: "Op-Amp Compensator Circuit",
        description:
          "Type III compensator implementation using TL072 op-amp with labeled component values: R=10kΩ, R1=560Ω, C1=6.86nF, C2=22pF, C3=22pF. Circuit shows input from error amplifier and output to PWM modulator.",
      },
      {
        title: "Complete Feedback Control System",
        description:
          "Full circuit schematic integrating buck converter power stage, voltage sensing divider (R3/R4), error amplifier comparing Vsense to Vref=5V, PID compensator, sawtooth PWM modulator, and gate drive circuitry—complete closed-loop system.",
      },
      {
        title: "Closed-Loop Simulation Results",
        description:
          "LTSpice transient analysis waveforms showing output voltage regulation at 12V with minimal ripple, response to input voltage step (35V→48V), and load current step (4A→3A) demonstrating stable transient recovery. Note: Simulation-based design; PCB not yet fabricated.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  const previous = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return { previous, next };
}
