// https://www.codewars.com/kata/5286a298f8fc1b7667000c1c/train/javascript

function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
}

DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function()
{
  // TODO: Code Here!
    let prevChar = ' '
    this.reset();
    let chunk = this.reader.getChunk();

    while(chunk != ''){
        for(let i = 0; i < chunk.length; i++){
            if(chunk[i] === '\n'){
                this.lineCount++;
                prevChar = ' ';
            }else{
                this.charCount++;
                if(this.lineCount === 0) this.lineCount = 1;
                if(chunk[i] != ' ' && prevChar === ' '){
                    this.wordCount++;
                }
                prevChar = chunk[i];
            }
        }
        chunk = this.reader.getChunk();
    }
}
