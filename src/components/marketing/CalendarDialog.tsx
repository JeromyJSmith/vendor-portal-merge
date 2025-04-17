
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Sample marketing events data
const marketingEvents = [
  { date: new Date(2025, 3, 12), title: "Flash Sale", type: "Discount" },
  { date: new Date(2025, 3, 15), title: "Newsletter", type: "Email" },
  { date: new Date(2025, 3, 20), title: "Product Launch", type: "Event" },
]

const CalendarDialog = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const navigate = useNavigate()
  
  // Find events for the selected date
  const selectedDateEvents = React.useMemo(() => {
    if (!date) return []
    
    return marketingEvents.filter(
      event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )
  }, [date])
  
  // Handle "View Full Calendar" button click
  const handleViewFullCalendar = () => {
    navigate("/marketing-calendar")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="neuro neuro-hover neuro-active px-3 py-2 rounded-lg flex items-center bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
          <CalendarIcon size={16} className="mr-2" />
          <span className="text-sm">Calendar</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Marketing Calendar</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md pointer-events-auto"
          />
          
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">
                {date ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date) : "Select a date"}
              </h3>
              <button 
                className="text-xs text-blue-400 hover:text-blue-300"
                onClick={handleViewFullCalendar}
              >
                View Full Calendar
              </button>
            </div>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedDateEvents.map((event, idx) => (
                  <div key={idx} className="neuro-sm rounded-md p-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{event.title}</span>
                      <span className="text-xs text-muted-foreground">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No events scheduled</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CalendarDialog
