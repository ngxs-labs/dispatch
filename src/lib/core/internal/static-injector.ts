import { Injectable, Injector, NgZone } from '@angular/core';
import { Store } from '@ngxs/store';

class NgxsDispatchModuleNotImported extends Error {
  constructor() {
    super('"NgxsDispatchModule" is not imported.');
  }
}

@Injectable()
export class StaticInjector {
  private static injector: Injector | null = null;

  constructor(injector: Injector) {
    StaticInjector.injector = injector;
  }

  public static getStore(): never | Store {
    if (this.injector === null) {
      throw new NgxsDispatchModuleNotImported();
    }

    return this.injector.get<Store>(Store);
  }

  public static getZone(): never | NgZone {
    if (this.injector === null) {
      throw new NgxsDispatchModuleNotImported();
    }

    return this.injector.get<NgZone>(NgZone);
  }
}
