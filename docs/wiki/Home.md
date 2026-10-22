# Nexus Adapter Optimization Studio — Home

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
