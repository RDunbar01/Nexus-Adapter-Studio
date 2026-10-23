# Browser presentation revision 1

Browser edition 2.7; native edition 2.7.0 is unchanged. The existing browser-trial URL is unchanged.

The trial now opens directly into the existing application welcome or guided setup, without the added trial banner above it. The product icon occupies the actual sidebar brand position. Original language selection, experimental notices and explicit consent controls remain in place.

Open **Settings**, then **Browser trial · diagnostics and license** for the WebGPU adapter check, diagnostic download, browser limitations and license link. Compression & Recovery Studio also places its optional original recovery_corpus.zip picker there; custom corpus import remains in the existing workflow. The adapter check reports availability, not measured throughput or total VRAM.

Personal use and internal commercial testing/evaluation permission remains linked in the application. Distribution and other uses retain their existing restrictions. No native package, engine kernel, model, corpus, or license grant was changed.

Fresh-storage DOM checks cover initial visibility, the sidebar icon, retained consent locks, Settings navigation, diagnostics export and corpus staging. Browser arithmetic, model workloads and physical GPU performance were not tested in this presentation change. Actual rendered desktop and responsive checks are separate from DOM tests.

The updated single HTML file is the runnable browser source. The small presentation integration is also provided in [studio_trial_presentation.js](browser-source/studio_trial_presentation.js). Rollback is available through the parent commit recorded in BROWSER_TRIAL.json.
