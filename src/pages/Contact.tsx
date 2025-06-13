import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Store Location</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Lane
                      <br />
                      Beverly Hills, CA 90210
                      <br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      hello@luxejewels.com
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Store Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 6:00 PM
                      <br />
                      Sunday: 12:00 PM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold mb-8">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
