import { VideoCarousel } from "@/components/ui/video-carousel";
import { CASE_VIDEOS } from "@/lib/content";

export function VideoTestimonials() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Veja como a ContrataPJ transforma a gestão da sua empresa
        </h2>

        <VideoCarousel videos={[...CASE_VIDEOS]} className="mx-auto" />
      </div>
    </section>
  );
}
