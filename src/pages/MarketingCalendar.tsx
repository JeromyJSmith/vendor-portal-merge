
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  ArrowLeft, 
  CalendarDays,
  CheckSquare,
  ListChecks,
  Calendar as CalendarIcon,
  PlusCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Sample marketing events data
const initialEvents = [
  { id: "1", date: new Date(2025, 3, 12), title: "Flash Sale", type: "Discount", completed: false },
  { id: "2", date: new Date(2025, 3, 15), title: "Newsletter", type: "Email", completed: false },
  { id: "3", date: new Date(2025, 3, 20), title: "Product Launch", type: "Event", completed: true },
];

// Sample todo list items
const initialTodos = [
  { id: "1", title: "Draft product launch email", completed: false, date: new Date(2025, 3, 18) },
  { id: "2", title: "Prepare social media assets", completed: true, date: new Date(2025, 3, 18) },
  { id: "3", title: "Schedule newsletter blast", completed: false, date: new Date(2025, 3, 14) },
];

const MarketingCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<"calendar" | "todos">("calendar");
  const [events, setEvents] = useState(initialEvents);
  const [todos, setTodos] = useState(initialTodos);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventType, setNewEventType] = useState("Event");
  const [newTodoTitle, setNewTodoTitle] = useState("");

  // Filter events for selected date
  const selectedDateEvents = events.filter(
    event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
  );

  // Filter todos for selected date
  const selectedDateTodos = todos.filter(
    todo => 
      todo.date.getDate() === date.getDate() &&
      todo.date.getMonth() === date.getMonth() &&
      todo.date.getFullYear() === date.getFullYear()
  );

  const addNewEvent = () => {
    if (newEventTitle.trim()) {
      const newEvent = {
        id: `event-${Date.now()}`,
        date: new Date(date),
        title: newEventTitle,
        type: newEventType,
        completed: false
      };
      setEvents([...events, newEvent]);
      setNewEventTitle("");
    }
  };

  const addNewTodo = () => {
    if (newTodoTitle.trim()) {
      const newTodo = {
        id: `todo-${Date.now()}`,
        title: newTodoTitle,
        completed: false,
        date: new Date(date)
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    }
  };

  const toggleTodoComplete = (todoId: string) => {
    setTodos(todos.map(todo => 
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleEventComplete = (eventId: string) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, completed: !event.completed } : event
    ));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 p-2 neuro-sm rounded-full hover:bg-accent"
          >
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-xl font-medium">Marketing Calendar</h1>
        </div>
        <div className="flex gap-2">
          <button 
            className={`neuro-sm px-3 py-2 rounded-lg flex items-center ${activeTab === "calendar" ? "bg-blue-500/20 text-blue-400" : ""}`} 
            onClick={() => setActiveTab("calendar")}
          >
            <CalendarDays size={16} className="mr-2" />
            <span>Calendar</span>
          </button>
          <button 
            className={`neuro-sm px-3 py-2 rounded-lg flex items-center ${activeTab === "todos" ? "bg-green-500/20 text-green-400" : ""}`}
            onClick={() => setActiveTab("todos")}
          >
            <ListChecks size={16} className="mr-2" />
            <span>To-Do List</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="neuro p-4 rounded-lg">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="rounded-md pointer-events-auto"
          />
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <CalendarIcon size={16} className="mr-2 text-blue-400" />
              <h3 className="text-sm font-medium">
                {new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}
              </h3>
            </div>
            <div className="text-xs text-muted-foreground">
              {selectedDateEvents.length} events, {selectedDateTodos.length} to-dos
            </div>
          </div>
        </div>

        {activeTab === "calendar" ? (
          <div className="neuro p-4 rounded-lg md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Events</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="neuro-sm p-2 rounded-full hover:bg-accent">
                    <Plus size={16} />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Add New Event</AlertDialogTitle>
                    <AlertDialogDescription>
                      Create a new marketing event for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex flex-col gap-4 my-4">
                    <input
                      type="text"
                      placeholder="Event title"
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                    />
                    <select
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newEventType}
                      onChange={(e) => setNewEventType(e.target.value)}
                    >
                      <option value="Event">Event</option>
                      <option value="Discount">Discount</option>
                      <option value="Email">Email</option>
                      <option value="Social">Social</option>
                      <option value="Launch">Product Launch</option>
                    </select>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={addNewEvent}>Add Event</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {selectedDateEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="neuro-sm p-3 rounded-lg">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <button 
                          className="mr-3" 
                          onClick={() => toggleEventComplete(event.id)}
                        >
                          {event.completed ? (
                            <CheckCircle2 size={18} className="text-green-400" />
                          ) : (
                            <Circle size={18} className="text-muted-foreground" />
                          )}
                        </button>
                        <span className={`text-sm ${event.completed ? "line-through text-muted-foreground" : "font-medium"}`}>
                          {event.title}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.type === "Discount" ? "bg-green-900/30 text-green-300" : 
                        event.type === "Email" ? "bg-blue-900/30 text-blue-300" :
                        event.type === "Social" ? "bg-purple-900/30 text-purple-300" :
                        event.type === "Launch" ? "bg-amber-900/30 text-amber-300" :
                        "bg-neutral-900/30 text-neutral-300"
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No events scheduled for this date</p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="mt-2 flex items-center mx-auto text-sm text-blue-400">
                      <PlusCircle size={14} className="mr-1" /> Add Event
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add New Event</AlertDialogTitle>
                      <AlertDialogDescription>
                        Create a new marketing event for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col gap-4 my-4">
                      <input
                        type="text"
                        placeholder="Event title"
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                      />
                      <select
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newEventType}
                        onChange={(e) => setNewEventType(e.target.value)}
                      >
                        <option value="Event">Event</option>
                        <option value="Discount">Discount</option>
                        <option value="Email">Email</option>
                        <option value="Social">Social</option>
                        <option value="Launch">Product Launch</option>
                      </select>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={addNewEvent}>Add Event</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        ) : (
          <div className="neuro p-4 rounded-lg md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">To-Do List</h2>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="neuro-sm p-2 rounded-full hover:bg-accent">
                    <Plus size={16} />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Add New To-Do</AlertDialogTitle>
                    <AlertDialogDescription>
                      Create a new to-do item for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex flex-col gap-4 my-4">
                    <input
                      type="text"
                      placeholder="Task description"
                      className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                      value={newTodoTitle}
                      onChange={(e) => setNewTodoTitle(e.target.value)}
                    />
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={addNewTodo}>Add To-Do</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            {selectedDateTodos.length > 0 ? (
              <div className="space-y-3">
                {selectedDateTodos.map((todo) => (
                  <div key={todo.id} className="neuro-sm p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <button 
                          className="mr-3" 
                          onClick={() => toggleTodoComplete(todo.id)}
                        >
                          {todo.completed ? (
                            <CheckSquare size={18} className="text-green-400" />
                          ) : (
                            <Square size={18} className="text-muted-foreground" />
                          )}
                        </button>
                        <span className={`text-sm ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                          {todo.title}
                        </span>
                      </div>
                      {todo.completed && <span className="text-xs text-green-400">Completed</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No to-dos for this date</p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="mt-2 flex items-center mx-auto text-sm text-green-400">
                      <PlusCircle size={14} className="mr-1" /> Add To-Do
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add New To-Do</AlertDialogTitle>
                      <AlertDialogDescription>
                        Create a new to-do item for {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date)}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex flex-col gap-4 my-4">
                      <input
                        type="text"
                        placeholder="Task description"
                        className="w-full px-3 py-2 neuro-inset rounded-md bg-transparent"
                        value={newTodoTitle}
                        onChange={(e) => setNewTodoTitle(e.target.value)}
                      />
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={addNewTodo}>Add To-Do</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Square = ({ size, className }: { size: number, className?: string }) => (
  <div className={`w-${size/16}rem h-${size/16}rem border-2 rounded-sm ${className || ""}`}></div>
);

export default MarketingCalendar;
