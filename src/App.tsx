const macDownload =
  "https://github.com/sonnylazuardi/image-compressor-native-sdk/releases/download/v0.1.2/Compressor-macos-arm64.zip";
const windowsDownload =
  "https://github.com/sonnylazuardi/image-compressor-native-sdk/releases/download/v0.1.2/Compressor-windows-x64.zip";

type IconProps = { size?: number; className?: string };

function CommandIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  );
}

function StarIcon({ size = 15, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function WindowsIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 5.14 10.54 4v7.07H3V5.14Zm8.46-1.3L21 2.5v8.57h-9.54V3.84ZM3 12.79h7.54V19.9L3 18.8v-6.01Zm8.46 0H21V21.5l-9.54-1.4v-7.31Z" />
    </svg>
  );
}

function DownloadButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-buttons${compact ? " download-buttons--compact" : ""}`}>
      <a className="download-button download-button--primary" href={macDownload}>
        <span className="download-button__platform">macOS</span>
        <span className="download-button__label">
          <CommandIcon />
          Download for Mac
        </span>
      </a>
      <a className="download-button download-button--secondary" href={windowsDownload}>
        <span className="download-button__platform">Windows</span>
        <span className="download-button__label">
          <WindowsIcon />
          Download for Windows
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Compressor home">
          <img className="brand__icon" src="/compressor-icon.png" alt="" width={44} height={44} />
          <span>Compressor</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Why Compressor</a>
          <a
            className="nav-download"
            href="https://github.com/sonnylazuardi/image-compressor-native-sdk"
          >
            <StarIcon />
            Star on GitHub
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <h1>Private. Native. Smaller images. Same good taste.</h1>
          <p className="hero__intro">
            Turn everyday images into lightweight WebP files, right on your desktop.
          </p>
          <DownloadButtons />
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="/compressor-hero.webp"
              alt="Compressor app showing an image preview and quality controls"
              width={1536}
              height={1024}
            />
          </div>
          <div className="format-note" aria-label="Supported input formats">
            <span>JPG</span>
            <span>PNG</span>
            <span>HEIC</span>
            <span>AVIF</span>
            <strong>to WebP</strong>
          </div>
        </div>
      </section>

      <section className="feature-intro" id="features">
        <p>Compression without the ceremony.</p>
        <h2>Drop it in. Pick a quality. Keep moving.</h2>
      </section>

      <section className="feature-layout" aria-label="Compressor features">
        <article className="feature feature--large">
          <div>
            <span className="feature__number">80%</span>
            <h3>A sensible default</h3>
            <p>
              Start at balanced quality, or choose Light, Medium, and Heavy presets.
            </p>
          </div>
          <div className="quality-control" aria-hidden="true">
            <div className="quality-control__labels">
              <span>Quality</span>
              <strong>80%</strong>
            </div>
            <div className="quality-control__track">
              <span />
            </div>
            <div className="quality-control__presets">
              <span>Light</span>
              <strong>Medium</strong>
              <span>Heavy</span>
            </div>
          </div>
        </article>

        <article className="feature feature--privacy">
          <div className="privacy-mark" aria-hidden="true">
            <img src="/compressor-icon.png" alt="" width={86} height={86} />
          </div>
          <div>
            <h3>Your images stay local</h3>
            <p>No uploads. No queue. Compression happens on your computer.</p>
          </div>
        </article>

        <article className="feature feature--formats">
          <div className="format-stack" aria-hidden="true">
            <span>PNG</span>
            <span>JPG</span>
            <strong>WebP</strong>
          </div>
          <div>
            <h3>Made for the formats you use</h3>
            <p>Open common image files and save a clean WebP beside the original.</p>
          </div>
        </article>
      </section>

      <section className="native-section">
        <div className="native-section__copy">
          <h2>Feels at home on your desktop.</h2>
          <p>
            A focused native window, keyboard shortcuts, drag and drop, and nothing between
            you and a smaller image.
          </p>
        </div>
        <div className="platforms" aria-label="Available platforms">
          <div>
            <span>macOS</span>
            <strong>Apple Silicon</strong>
          </div>
          <div>
            <span>Windows</span>
            <strong>x64</strong>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <img src="/compressor-icon.png" alt="Compressor app icon" width={112} height={112} />
        <h2>Make every image lighter.</h2>
        <p>Free to download for macOS and Windows.</p>
        <DownloadButtons compact />
      </section>

      <footer>
        <div className="brand brand--footer">
          <img src="/compressor-icon.png" alt="" width={34} height={34} />
          <span>Compressor</span>
        </div>
        <p>Private, native image compression.</p>
        <a href="https://github.com/sonnylazuardi/image-compressor-native-sdk">GitHub</a>
      </footer>
    </main>
  );
}
