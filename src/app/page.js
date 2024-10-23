// src/app/page.js
import Heading from "@/components/common/Heading";
import Section from "@/components/container/Section";
import Support from "@/components/Support";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Section padding="normal">
        {/* Hero Section */}
        <div className="bg-white  mt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heading className="text-brown">
                Support
              </Heading>

            </div>
          </div>
        </div>

        {/* Support Section */}
        <Support />
      </Section>
    </main>
  );
}