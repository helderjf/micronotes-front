import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  note: Note;
  id: number;

  constructor(private noteService: NoteService, private router:Router, private route: ActivatedRoute) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(this.id).then((data: Note)=> this.note=data);
  }

  ngOnInit() {
  }




  edit(){
    this.router.navigateByUrl('/note/edit/'+this.note.id);
  }
  delete(){
    this.noteService.delete(this.note.id).subscribe();
    this.router.navigateByUrl('/notes');
  }
  
  goBack(){
    this.router.navigateByUrl('/notes');
  }


}
