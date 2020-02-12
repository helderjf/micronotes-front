import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  createNoteForm: FormGroup;
  note: Note;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private router: Router) { 

    
    this.createNoteForm = this.formBuilder.group({
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
    this.note.title=this.createNoteForm.get('title').value;
    this.note.text=this.createNoteForm.get('text').value;

    this.noteService.createNote(this.note).subscribe(data =>{
      console.log("note created");
      this.router.navigateByUrl('/notes');
    }, error =>{
      console.log('Create note failed!');
    });
  }
  
  goBack(){
    this.router.navigateByUrl('/notes');
  }


}
