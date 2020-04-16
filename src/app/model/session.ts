import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class SessionUser {

 private _isConnected: boolean = false;
 private _dataUser: [];


    public get dataUser(): [] {
        return this._dataUser;
    }
    public set dataUser(value: []) {
        this._dataUser = value;
    }

    public get isConnected(): boolean {
        return this._isConnected;
    }
    public set isConnected(value: boolean) {
        this._isConnected = value;
    }

}
  