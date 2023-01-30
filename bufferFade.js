var fade = new Buffer("fade");
var sample = new Buffer("sample");

function bang()
{
	
	for(var i = 0; i < fade.framecount() / 4; i++)
	{
        //fade in

        //get fade in
        var fadeIn = fade.peek(1, i, 1);

        //get sample
        var sampleIn = sample.peek(1, i, 1);

        //combine sample with fade
        sample.poke(1, i, fadeIn * sampleIn);


        //fade out

        //get fade length
        var fadeLength = fade.framecount() / 4;


        //get sample length
        var sampleLength = sample.framecount();

        //get fade out
        var fadeOut = fade.peek(1, fadeLength + i, 1);

        //get sample
        var sampleOut = sample.peek(1, (sampleLength - fadeLength) + i, 1);

        //combine sample with fade
        sample.poke(1, (sampleLength - fadeLength) + i, fadeOut * sampleOut);


	}		
}