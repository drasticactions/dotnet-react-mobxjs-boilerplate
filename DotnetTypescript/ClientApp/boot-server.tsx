import * as React from 'react';
import { Provider } from 'mobx-react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createServerRenderer, RenderResult } from 'aspnet-prerendering';
import { routes } from './routes';
import { AppState } from './appState';

export default createServerRenderer(params => {
    return new Promise<RenderResult>((resolve, reject) => {
        const basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        const urlAfterBasename = params.url.substring(basename.length);
        const routerContext: any = {};
        const appState = new AppState();
        const stores = {
            appState: appState,
        };

        const app = (<Provider {...stores}>
            <StaticRouter context={routerContext} children={routes} location={params.location.path} basename={basename} />
        </Provider>);
        renderToString(app);

        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }

        // Once any async tasks are done, we can perform the final render
        params.domainTasks.then(() => {
            resolve({
                html: renderToString(app),
                globals: { }
            });
        }, reject); // Also propagate any errors back into the host application

    });
});