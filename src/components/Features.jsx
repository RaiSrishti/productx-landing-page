import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <FeatureCard
        title="Fast Performance"
        description="Optimized for speed and reliability across all devices."
      />
      <FeatureCard
        title="Secure Platform"
        description="Enterprise-level security with data protection."
      />
      <FeatureCard
        title="Easy Integration"
        description="Seamlessly integrates with your existing tools."
      />
    </section>
  );
}

export default Features;