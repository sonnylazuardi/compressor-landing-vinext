import Image from "next/image";

const macDownload =
  "https://github.com/sonnylazuardi/image-compressor-native-sdk/releases/download/v0.1.2/Compressor-macos-arm64.zip";
const windowsDownload =
  "https://github.com/sonnylazuardi/image-compressor-native-sdk/releases/download/v0.1.2/Compressor-windows-x64.zip";

function DownloadButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`download-buttons${compact ? " download-buttons--compact" : ""}`}>
      <a className="download-button download-button--primary" href={macDownload}>
        <span className="download-button__platform">macOS</span>
        <span>Download for Mac</span>
      </a>
      <a className="download-button download-button--secondary" href={windowsDownload}>
        <span className="download-button__platform">Windows</span>
        <span>Download for Windows</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Compressor home">
          <Image
            unoptimized
            className="brand__icon"
            src="/compressor-icon.png"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>Compressor</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#features">Why Compressor</a>
          <a
            className="nav-download"
            href="https://github.com/sonnylazuardi/image-compressor-native-sdk/releases/tag/v0.1.2"
          >
            View release
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__copy">
          <p className="eyebrow">Native image compression</p>
          <h1>Smaller images. Same good taste.</h1>
          <p className="hero__intro">
            Turn everyday images into lightweight WebP files, right on your desktop.
          </p>
          <DownloadButtons />
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <Image
              unoptimized
              src="/compressor-hero.png"
              alt="Compressor app showing an image preview and quality controls"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 94vw, 56vw"
              priority
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
            <Image unoptimized src="/compressor-icon.png" alt="" width={86} height={86} />
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
            A focused native window, keyboard shortcuts, drag and drop, and nothing
            between you and a smaller image.
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
        <Image
          unoptimized
          src="/compressor-icon.png"
          alt="Compressor app icon"
          width={112}
          height={112}
        />
        <h2>Make every image lighter.</h2>
        <p>Free to download for macOS and Windows.</p>
        <DownloadButtons compact />
      </section>

      <footer>
        <div className="brand brand--footer">
          <Image unoptimized src="/compressor-icon.png" alt="" width={34} height={34} />
          <span>Compressor</span>
        </div>
        <p>Private, native image compression.</p>
        <a href="https://github.com/sonnylazuardi/image-compressor-native-sdk">
          GitHub
        </a>
      </footer>
    </main>
  );
}
