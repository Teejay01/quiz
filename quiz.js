function NotesApplication(author){
	this.author=author;
	this.notes=[];

	this.create= function (note_content){
		if (note_content.length>0){
			this.notes.push(note_content);
			return "Note created!"}
		else {
			return "Note not created!";
		}
			
	};
	this.listNotes= function(){
		if(this.noteArray.length < 1){
			console.log("No notes.");
		}
		else{
			for(let i=0; i<this.notes.length;i++){
				console.log("Note ID: " + this.noteArray[i]);
				console.log(this.notes[i]);
				console.log("\n\nBy Author " + this.author + "\n");
			}
		}
	};
	this.get=function (note_id){
		return "Note ID: "+ this.notes[note_id];
	};
	
