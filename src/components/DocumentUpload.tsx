import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    processFiles(files);
  };

  const processFiles = async (files: File[]) => {
    setIsProcessing(true);
    
    // Simulate file processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newFiles = files.map(file => file.name);
    setUploadedFiles(prev => [...prev, ...newFiles]);
    setIsProcessing(false);

    toast({
      title: "Files processed successfully!",
      description: `${files.length} document(s) have been analyzed and added to your study materials.`,
    });
  };

  return (
    <section id="upload" className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Upload Your Study Materials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI will analyze your documents and create personalized study plans, 
              assessments, and recommendations tailored to your learning style.
            </p>
          </div>

          <Card 
            className={`p-8 transition-all duration-300 ${
              isDragging 
                ? 'border-primary bg-primary/5 shadow-glow' 
                : 'border-border hover:shadow-soft'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              {isProcessing ? (
                <div className="space-y-4">
                  <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin" />
                  <h3 className="text-xl font-semibold text-foreground">Processing Documents...</h3>
                  <p className="text-muted-foreground">Our AI is analyzing your files and extracting key information.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                    <Upload className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Drop your files here</h3>
                    <p className="text-muted-foreground mb-4">
                      Supports PDF, DOCX, TXT, and more. Maximum file size: 20MB
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" className="relative overflow-hidden">
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.docx,.txt,.md"
                        onChange={handleFileSelect}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      Choose Files
                    </Button>
                    <Button variant="outline" className="hover:shadow-soft">
                      Browse Examples
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Uploaded files list */}
          {uploadedFiles.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Processed Documents</h4>
              <div className="grid gap-3">
                {uploadedFiles.map((fileName, index) => (
                  <Card key={index} className="p-4 bg-gradient-card border-success/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <FileText className="w-4 h-4 text-success" />
                      </div>
                      <span className="flex-1 text-sm font-medium text-foreground">{fileName}</span>
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;