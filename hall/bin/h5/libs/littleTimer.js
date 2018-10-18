var clock = 0;
self.setInterval(onTime,1000);

function onTime()
{
 clock++
 self.postMessage(clock);
}