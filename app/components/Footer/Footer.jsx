import React from "react";

const Footer = () => {
    return(
        <footer className="border-t border-border">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Livio Reinoso. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer
