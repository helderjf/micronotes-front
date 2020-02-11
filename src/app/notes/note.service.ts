import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { Note } from './note';
import { JwtAuthResponse } from '../auth/jwt-auth-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private self: NoteService;
  private url = 'http://localhost:8080/api/notes/';
  private notes: Array<Note>;

  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) { 
    this.self = this;
  }

  getAll(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>(this.url + 'all');
  }

  mockNotes(): Observable<Array<Note>> {
    const notes = [
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      {
        id: 1,
        title: "primeia nota",
        text: "I had just created a new project and got this error. Since I had no legacy code I needed to work with and wanted to use the latest (9.0) version of Angular, I ran this comman",
        dateCreated: new Date(),
        dateEdited: new Date(),
        ownerId: 1
      },
      
    ]
    return of(notes);
  }
  

  }

