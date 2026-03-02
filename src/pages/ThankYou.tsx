import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Push dataLayer event for Google Ads conversion tracking
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "thank_you_page_view",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="text-6xl">✅</div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Your request has been submitted successfully
        </h1>
        <p className="text-muted-foreground text-lg">
          We will contact you shortly
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
