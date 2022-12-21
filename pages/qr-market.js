import React, { useEffect } from "react";

const QrMarket = () => {
  useEffect(() => {
    if (navigator.userAgent.match(/Android/i)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.aybumobile";
    } else {
      window.location.href =
        "https://apps.apple.com/us/app/ayb%C3%BC-mobile/id1658659307";
    }
  }, []);

  return (
    <div className="p-2">
      <h1>Redirecting...</h1>
    </div>
  );
};

export default QrMarket;
