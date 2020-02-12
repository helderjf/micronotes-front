import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;
  id: number;
  editNoteForm: FormGroup;
  
  constructor(private noteService: NoteService, private router:Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(this.id).then((data: Note)=> this.note=data);

    this.editNoteForm = this.formBuilder.group({
      title: '',
      text: ''
    });
    
    this.note = {
      id: null,
      title: '',
      text: '',
      dateCreated: null,
      dateEdited: null,
      ownerId: null,
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    this.note.title=this.editNoteForm.get('title').value;
    this.note.text=this.editNoteForm.get('text').value;

    this.noteService.editNote(this.note).subscribe(data =>{
      console.log("note updated");
      this.router.navigateByUrl('/notes');
    }, error =>{
      console.log('Update note failed!');
    });
  }

  goBack(){
    this.router.navigateByUrl('/notes');
  }

}
