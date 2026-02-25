import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const ProjectsCard = ({info}) => {
    return(
        <a
            href={info.link}
            target="_blank"
            rel="noreferrer"
            className="group block h-full"
        >
            <article className="card-hover flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                    <Image
                        src={info.img}
                        width={600}
                        height={340}
                        alt={info.imgAlt}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs rounded-md">
                            Visit <ExternalLink size={12} />
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {info.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                        {info.desc}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {info.features.map(feature => (
                            <span
                                key={feature + info.name}
                                className="px-2 py-1 text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </a>
    )
}
export default ProjectsCard
