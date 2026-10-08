import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Save, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/features/auth/AuthProvider";
import { useProgress } from "@/features/progress/ProgressProvider";
import { useBookmarks } from "@/features/bookmarks/BookmarkProvider";
import { formatDuration } from "@/lib/format";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const { user, updateProfile, signOut, isDemo } = useAuth();
  const { getStats, resetCourse, getAllProgress } = useProgress();
  const { saved } = useBookmarks();

  const [name, setName] = useState(user?.name ?? "");
  const [savedName, setSavedName] = useState(false);
  const stats = getStats();

  if (!user) {
    return (
      <div className="container py-12 text-center">
        <h1 className="display text-2xl mb-4">Sign in to view your profile</h1>
        <p className="text-muted-foreground mb-6">Your learning dashboard, saved courses, and certificates.</p>
        <Button asChild className="rounded-sm">
          <Link to="/login">Sign In</Link>
        </Button>
      </div>
    );
  }

  const handleSaveName = () => {
    updateProfile(name);
    setSavedName(true);
    setTimeout(() => setSavedName(false), 2000);
  };

  const handleResetAll = () => {
    if (confirm("This will delete ALL your progress, certificates, and bookmarks. This cannot be undone.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="container py-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="display text-3xl mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account and learning data.</p>
      </div>

      {/* Account */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="display text-lg">Account</CardTitle>
              <CardDescription>Demo session — no real account exists</CardDescription>
            </div>
            <Badge variant={isDemo ? "secondary" : "default"} className="text-[10px]">
              Demo Mode
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-gold-500/30 bg-gold-500/15 font-serif text-xl font-semibold text-gold-700 dark:text-gold-300" aria-hidden="true">
              {name.slice(0, 1).toUpperCase()}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-64"
                  disabled={savedName}
                />
                <Button onClick={handleSaveName} disabled={savedName || name.trim() === user.name} className="rounded-sm" size="sm">
                  {savedName ? <Save className="h-4 w-4" /> : "Save"}
                </Button>
                {savedName && <span className="text-sm text-gold-600 dark:text-gold-300">Saved</span>}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Danger Zone</p>
              <p className="text-sm text-muted-foreground">Permanently delete all local data</p>
            </div>
            <Button variant="destructive" onClick={handleResetAll} className="rounded-sm">
              <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
              Reset All Data
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Learning Stats */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="display text-lg">Learning Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatBox label="Courses Started" value={stats.coursesStarted} icon={<User />} />
            <StatBox label="Courses Completed" value={stats.coursesCompleted} icon={<Badge />} />
            <StatBox label="Lessons Completed" value={stats.lessonsCompleted} icon={<RotateCcw />} />
            <StatBox label="Time Learning" value={formatDuration(stats.totalMinutes)} icon={<RotateCcw />} />
          </div>
        </CardContent>
      </Card>

      {/* Saved Courses Count */}
      <Card>
        <CardHeader>
          <CardTitle className="display text-lg">Saved Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You have <strong>{saved.length}</strong> course{saved.length !== 1 ? "s" : ""} saved.
          </p>
          <Button variant="outline" asChild className="mt-4 rounded-sm">
            <Link to="/saved">View Saved Courses</Link>
          </Button>
        </CardContent>
    </Card>
    </div>
  );
}

function StatBox({ label, value, icon }: { label: string; value: number | string; icon: React.ReactNode }) {
  return (
    <div className="text-center p-4 rounded-sm border border-border bg-card">
      <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary/60 text-muted-foreground">
        {icon}
      </div>
      <div className="display text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}