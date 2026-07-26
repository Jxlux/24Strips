import { serve } from "bun";
import { file } from "bun";
// imports to make syntax use easier, ex serve not bun.serve
// remember to go File: Save all before running or else state not change


serve({
    port: 3000, // serve on port 3000
    fetch(req: Request): Response { // make request to server when someone connects and init response
    const url: URL = new URL(req.url) 
        switch (url.pathname) {
            case '/':
                 return new Response(file('src/index.html'));
               

            case '/styles.css':
                 return new Response(file('src/styles.css'));
                 

    default: return new Response("404", { status: 404 } satisfies ResponseInit);

        }
    }
});