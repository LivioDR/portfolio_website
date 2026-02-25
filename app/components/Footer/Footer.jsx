import React from "react";

const Footer = () => {
    return(
        <footer className="border-t border-border">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Livio Reinoso. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                        href="https://www.freepik.com/free-vector/antigravity-technology-with-elements_4082399.htm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Laptop image by Freepik
                    </a>
                    <a
                        className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                        href="https://svgl.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Icons by svgl
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
