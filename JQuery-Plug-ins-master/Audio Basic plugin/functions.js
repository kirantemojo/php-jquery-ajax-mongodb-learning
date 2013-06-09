function randomFromInterval(from,to,isInt)
{
	var theNum = Math.floor(Math.random()*(to-from+1)+from);
	if(!isInt)
	{
		theNum = (theNum/100);
	}
	return theNum;
}
