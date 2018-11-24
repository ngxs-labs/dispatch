import { Injectable, Injector } from '@angular/core';

/**
 * Allows multiple decorators to get access to the DI store
 */
@Injectable()
export class InjectorAccessor {
    /**
     * Injector for accessing DI
     */
    private static injector: Injector | null = null;

    /**
     * Creates InjectorAccessor instance
     *
     * @param injector - Root injector
     */
    constructor(injector: Injector) {
        InjectorAccessor.injector = injector;
    }

    /**
     * @returns - Throws if `NgxsDispatchPluginModule` is not imported or injector instance
     */
    public static getInjector(): never | Injector {
        if (!this.injector) {
            throw new Error(`You've forgotten to import \`NgxsDispatchPluginModule\``);
        }

        return this.injector;
    }
}
