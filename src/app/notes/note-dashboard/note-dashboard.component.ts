import { Router } from '@angular/router';
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


  constructor(private noteService: NoteService, private router: Router) {
    this.notes = this.noteService.getAll();
   }

  ngOnInit() {
    this.notes = this.noteService.getAll();
  }

  view(id: number){
    this.router.navigateByUrl('/note/'+id);
  }
  edit(id: number){
    this.router.navigateByUrl('/note/edit/'+id);
  }
  delete(id: number){
    this.noteService.delete(id).subscribe();
    this.router.navigateByUrl('/notes');
  }

}
