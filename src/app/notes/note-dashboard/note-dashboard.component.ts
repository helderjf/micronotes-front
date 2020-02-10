import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.css']
})
export class NoteDashboardComponent implements OnInit {

  notes: Observable<Array<Note>>;


  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getAll();
  }

}
