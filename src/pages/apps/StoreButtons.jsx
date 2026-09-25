const StoreButtons = ({ appStoreUrl, playStoreUrl }) => {
  return (
    <>
      <div className="store-buttons">
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="store-button"
        >
          <span className="apple-icon"></span>

          <div>
            <small>Download on the</small>

            <strong>App Store</strong>
          </div>
        </a>

        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="store-button"
        >
          <span className="play-icon">▶</span>

          <div>
            <small>GET IT ON</small>

            <strong>Google Play</strong>
          </div>
        </a>
      </div>

      <style>{`

        .store-buttons {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;
        }

        .store-button {
          min-width: 165px;
          height: 54px;

          display: flex;

          align-items: center;

          gap: 12px;

          padding:
            8px 16px;

          box-sizing: border-box;

          background: #1f2a33;

          color: white;

          text-decoration: none;

          border-radius: 4px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .store-button:hover {
          transform:
            translateY(-3px);

          background: #446040;
        }

        .store-button small {
          display: block;

          font-family: Arial, sans-serif;

          font-size: 8px;

          line-height: 1;

          opacity: 0.65;

          text-transform: uppercase;
        }

        .store-button strong {
          display: block;

          margin-top: 4px;

          font-family: Arial, sans-serif;

          font-size: 16px;

          line-height: 1;
        }

        .apple-icon {
          font-size: 29px;

          line-height: 1;
        }

        .play-icon {
          font-size: 18px;

          line-height: 1;
        }

        @media (max-width: 500px) {

          .store-button {
            min-width: 150px;
          }

        }

      `}</style>
    </>
  );
};

export default StoreButtons;
