import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tmazfdjzncsfskdttmye.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtYXpmZGp6bmNzZnNrZHR0bXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNzI4OTgsImV4cCI6MjA1ODk0ODg5OH0.oyraT-TGjFV2dXsABxRT6KSBLrF2s0MqCJOnR7iXuDo"
);

export default supabase;
