import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
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
    this.httpClient.get
    return this.httpClient.get<Array<Note>>(this.url + 'all');
  }


  }

