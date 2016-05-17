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
	}
	this.get=function (note_id){
		return "Note ID: "+ this.notes[note_id];
	}
	this.search=function(search_text){
		if(this.notes.includes(search_text)){
			return "Note ID: "+ this.note_id+"\n"+note_content+"\n\n"+ "By Author " +this.author;
		}
		else{
			return "No result."
		}
	}
	this.delete= function(note_id){
		delete this.notes[note_id]
	}
	this.edit=function(note_id, new_content){
		this.notes[note_id]=new_content;
	}
}
