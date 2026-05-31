import { CASE_VIDEOS } from "@/lib/content";

export function VideoTestimonials() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Veja como a ContrataPJ transforma a gestão da sua empresa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_VIDEOS.map((video) => (
            <div key={video.id} className="flex flex-col gap-3">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-sm font-medium text-slate-600 text-center px-2">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
