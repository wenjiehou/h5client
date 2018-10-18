package hall.view
{
	import rb.framework.mvc.AbstractLayer;
	
	public class HallView extends AbstractLayer
	{
		public function HallView()
		{
			super();
		}
		
		public var hallLayer:HallLayer;
		
		override public function onAdd():void
		{
			if(this.hallLayer==null)
			{
				this.hallLayer = new HallLayer();
			}
			
		
			
			this.hallLayer.show();
		}
		
		override public function onRemove():void
		{
			this.hallLayer.hide();
		}
		
		override public function clearHandlers():void
		{
			
		}
	}
}