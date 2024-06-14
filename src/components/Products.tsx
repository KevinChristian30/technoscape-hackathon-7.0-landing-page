import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Bot,
  Mail,
  MessageCircle,
  PaletteIcon,
  Phone,
  PresentationIcon,
  StoreIcon,
} from "lucide-react";

const Products = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Products
        </h2>
        <p className="mt-1 text-muted-foreground">
          Whatever your business needs, we got you covered.
        </p>
      </div>

      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-10">
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Mail className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Email Helpdesk</CardTitle>
            </CardHeader>
            <CardContent>Easily manage and reply to emails.</CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Bot className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Chatbot</CardTitle>
            </CardHeader>
            <CardContent>
              AI Chatbot fine tuned to your business needs.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <MessageCircle className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Chat Helpdesk</CardTitle>
            </CardHeader>
            <CardContent>
              {`AI recommended replies to customer's messages.`}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Phone className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Call Helpdesk</CardTitle>
            </CardHeader>
            <CardContent>
              {`AI recommended answers to customer's queries.`}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Products;
