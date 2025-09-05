// src/pages/Browse.tsx
import React from 'react';
import { Heart, Share2, MessageCircle, Shield, ChevronRight, Star, MapPin, Clock, ShoppingCart, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'; // Updated import
import Button from '../components/Button';
import Badge from '../components/Badge';

// --- Mock Data ---
const PRODUCT = {
  id: 1,
  title: 'Macbook Pro 13 (2020) - M1 Chip',
  brand: 'Apple Macbook',
  price: 10000,
  currency: 'บาท',
  condition: 'Excellent condition, barely used. Perfect for coding and design work.',
  stock: 1,
  photos: [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
  ],
};

const RELATED = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 2,
  title: 'MacBook Pro 13' + ' (2020) – M1 Chip',
  price: 10000,
  currency: 'บาท',
  distance: '0.8 km',
  time: '21m ago',
  badge: i % 3 === 0 ? 'Electronic' : i % 3 === 1 ? 'Furniture' : 'Textbook',
  photo: '/6.png',
}));


const formatPrice = (n: number) => n.toLocaleString('th-TH');


function Gallery() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow">
        <img
          src={PRODUCT.photos[active]}
          alt={PRODUCT.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Button onClick={() => {}} className="rounded-full shadow">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button onClick={() => {}} className="rounded-full shadow">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {PRODUCT.photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`aspect-[4/3] overflow-hidden rounded-xl border transition-all ${
              active === i ? 'ring-2 ring-primary' : 'hover:opacity-90'
            }`}
          >
            <img src={p} alt={`thumb-${i}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Breadcrumbs() {
  const items = ['Browse', 'IT & Electronics', 'Apple Macbook', 'Macbook Pro 13 (2020) – M1 Chip'];
  return (
    <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
      {items.map((x, i) => (
        <React.Fragment key={x}>
          <span className={`hover:text-foreground ${i === items.length - 1 ? 'font-medium text-foreground' : ''}`}>{x}</span>
          {i < items.length - 1 && <ChevronRight className="mx-1 h-4 w-4" />}
        </React.Fragment>
      ))}
    </nav>
  );
}

function SellerPanel() {
  return (
    <Card className="sticky top-6 rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{PRODUCT.brand}</CardTitle>
        <div className="mt-1 text-2xl font-semibold">{PRODUCT.title}</div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <div className="text-3xl font-bold">{formatPrice(PRODUCT.price)} {PRODUCT.currency}</div>
          <div className="mt-1 text-xs text-muted-foreground">สินค้าพร้อมส่ง {PRODUCT.stock} ชิ้น</div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-semibold">คำอธิบาย</div>
          <p className="leading-relaxed text-muted-foreground">{PRODUCT.condition}</p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-sm">
          <Shield className="h-4 w-4" />
          <span>ปลอดภัยเมื่อชำระเงินผ่านระบบของเรา</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border p-3">
          <div className="grid place-items-center rounded-full bg-muted p-2">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Username Seller</div>
            <div className="text-xs text-muted-foreground">ออนไลน์เมื่อสักครู่</div>
          </div>
          <Button onClick={() => {}} className="px-6"><MessageCircle className="mr-2 h-4 w-4" />ติดต่อผู้ขาย</Button>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" />ประกาศเมื่อ 21m</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />0.8 km</div>
          <div className="flex items-center gap-2"><Star className="h-4 w-4" />4.9 (128)</div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button onClick={() => {}} className="flex-1"><ShoppingCart className="mr-2 h-4 w-4" />เพิ่มลงตะกร้า</Button>
          <Button onClick={() => {}} variant="secondary" className="flex-1">ซื้อทันที</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function RelatedList() {
  return (
    <section className="mt-12">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Related Product</h3>
        <Button onClick={() => {}} variant="ghost" className="h-8 px-2">Show more</Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {RELATED.map((p) => (
          <Card key={p.id} className="group rounded-2xl transition-shadow hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
                <img src={p.photo} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute left-3 top-3">
                  <Badge className="rounded-full bg-primary/90 text-xs">{p.badge}</Badge>
                </div>
              </div>
              <div className="space-y-2 p-4">
                <div className="truncate text-sm text-muted-foreground">{PRODUCT.title}</div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{formatPrice(p.price)} {p.currency}</div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.distance}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function Browse() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <Breadcrumbs />

      <div className="grid gap-8 lg:grid-cols-2">
        <Gallery />
        <SellerPanel />
      </div>

      <RelatedList />
    </div>
  );
}
