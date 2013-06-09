function playTheSound(theSound)
{
	myContext = theSound.play();
	return myContext;
}

function killTheSound(myContext)
{
	soundBlogTag.killSound(myContext);
}