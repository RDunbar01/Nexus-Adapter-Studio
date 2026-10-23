# Nexus Adapter Optimization Studio 2.7.1

The complete download is `Nexus_adapter_2.7.1_Full.zip`. Extract the entire ZIP together. Keep `Start_Nexus.py`, `installer.py`, `package_manifest.json` and all numbered `.nxd` parts in their supplied layout. Do not mix releases.

Run `python Start_Nexus.py` with standard 64-bit CPython 3.12. Review the installation plan before confirming. The manifest supplies the package checksums and installation layout. Data parts are at most 10,000,000 bytes and individual distributed components are below 20,000,000 bytes; the complete ZIP and reconstructed application may be larger.

Native PyTorch compatibility depends on the selected runtime and its probe. Existing Python installations, drivers and compilers are not silently replaced. Browser WebGPU support is not proof of successful model arithmetic or adequate memory.

[Current overview and browser trial](https://github.com/RDunbar01/Nexus-Adapter-Studio#readme) · [UI changes](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/docs/CHANGELOG_2.7.1.md)

Personal use and internal commercial testing and evaluation are permitted for Nexus-owned material. Distribution, modification, production deployment and other commercial use require express written consent. See LICENSE and COMMERCIAL_EVALUATION_PERMISSION.md. Third-party licenses and previously granted rights remain unchanged.

This UI patch does not change the engine, add model compatibility or establish physical Windows/Radeon qualification. See the matching release validation evidence for checks actually performed.
