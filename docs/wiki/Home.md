# Nexus Adapter Optimization Studio — Home

## [Try in your browser](<https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html>) · pending activation

Pages has not been activated or verified for this release. This is the planned HTTPS launch address, not a currently live trial. The repository HTML source does not execute in GitHub’s file viewer.

After publication, open the link and choose **Check WebGPU adapter**. The first-10-seconds goal is to inspect the UI and capability, not to download a model or guarantee training/inference. Loading depends on the connection and device.

**No Python is required for the HTML trial. A full download is required for the native PyTorch backend.** Keep the Python installer and every matching data part together. Python and PyTorch do not run in the HTML. WebGPU support, local inputs and model compatibility checks still apply.

## Python and native runtime requirements

- **Recommended launcher: standard 64-bit CPython 3.12.** The installer advertises Python **3.11–3.14**, but the bootstrap itself does not enforce that version range. Opening the installer with another version is not evidence that the native backend is compatible.
- **New AMD runtime installation requires standard, non-free-threaded, 64-bit CPython 3.11–3.14** on Windows 11 **25H2**. Existing runtimes are tested before that installation gate and are reused only when the runtime probe passes; their Python must match their installed PyTorch wheels. No wider Python-version compatibility is certified here.
- The packaged native probe expects **PyTorch 2.14.0+rocm10.1.0**, HIP and the configured RX 7900 XT/XTX device, then performs a finite FP32 forward/backward check. Python, AMD drivers and compiler prerequisites are not installed or changed by this package. Check the [official AMD compatibility matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html) for the exact OS/GPU/driver combination.

These are installer/runtime conditions, not completed physical Windows, WebView2, Radeon or full-model qualification. A successful probe does not qualify every precision, compilation mode or workload.

**2.7.0 · English**

This is the reviewable Wiki source for the next release, not a claim that the live Wiki or browser trial is already published.

[English](Home.md) · [Français](Home.fr.md) · [日本語](Home.ja.md) · [한국어](Home.ko.md)

## Purpose

Train experimental adapters for admitted models using your own corpus, compare against the frozen base and export supported checkpoints. No base model is bundled. A GGUF extension alone does not establish compatibility.

## Choose an edition

### Browser edition

[HTML](../../Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](../../README.md)

Use a compatible WebGPU browser on HTTPS or a supported secure localhost origin. The single HTML file contains the custom JavaScript/WGSL engine. Import supported local files. No Python, PyTorch, native service, online dataset download or native GPU telemetry is available; runtime network requests are blocked. GitHub’s source viewer is not an executable trial.

### Installed edition

Extract the complete release ZIP and keep the installer with all data parts. Every distributed component must be smaller than 20,000,000 bytes; reconstructed files and model downloads can be larger. Follow the matching package manifest and installer summary. Native PyTorch settings and tests belong to the installed edition, not the HTML-only edition.

## Evidence and limits

CPU regression and static/DOM checks are not physical Windows/Radeon/WebGPU validation. Compare only equivalent model, corpus, context, batch, precision and backend conditions. Training/recovery, prompt processing and token generation rates are different measurements. No universal compatibility or maximum speed is guaranteed.

## Credits and licensing

Rich Dunbar / Nexus Emerging Technology, developed with AI-assisted coding. Existing licenses and third-party research, code, model and dataset terms remain in force. This page grants no additional license.

## Current release licensing

This Nexus release is not offered under Apache License 2.0. Nexus-owned software may be used only for personal, non-commercial purposes. Any other use, including commercial use, modification or redistribution, requires express written consent from the rights holder. Third-party code, models, datasets and separately licensed components retain their own licenses and notices. Previously granted rights and rights that cannot lawfully be restricted remain unchanged.
