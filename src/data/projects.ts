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
        "A high-power DC-DC boost converter prototype designed for solar energy systems, capable of stepping up 60V/30A solar panel input to regulated 120V DC output. This team-based project demonstrates advanced power electronics design, MPPT algorithm implementation, and iterative hardware development.",
        "Over the course of five prototype iterations, the team successfully reduced the unit cost by 80% (from $1,500 to $300) while maintaining 90% power conversion efficiency through careful component selection, topology optimization, and PCB layout improvements.",
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
