function NotesApplication(author){
	this.author=author;
	this.notes=[];

	this.create= function (note_content){
		if note_content.length>0
			this.notes.push(note_content)
			return "Note created!"
		else {
			return "Note not created!"
		}
			
	}
}
