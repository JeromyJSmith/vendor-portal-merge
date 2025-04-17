
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface VendorOption {
  id: string;
  label: string;
}

interface VendorFilterProps {
  selectedVendor: string | null;
  onVendorChange: (vendorId: string) => void;
}

const vendors: VendorOption[] = [
  { id: "all", label: "All Vendors" },
  { id: "100-MMM", label: "100-MMM" },
  { id: "101-BAB", label: "101-BAB" },
  { id: "102-BSG", label: "102-BSG" },
  { id: "103-CCC", label: "103-CCC" },
  { id: "104-CVB", label: "104-CVB" },
  { id: "105-C3D", label: "105-C3D" },
  { id: "106-FAP", label: "106-FAP" },
  { id: "107-GVS", label: "107-GVS" },
  { id: "108-BRW", label: "108-BRW" },
  { id: "109-ITB", label: "109-ITB" },
  { id: "110-LGC", label: "110-LGC" },
  { id: "111-MVP", label: "111-MVP" },
  { id: "112-MWC", label: "112-MWC" },
  { id: "113-MJD", label: "113-MJD" },
  { id: "114-MYL", label: "114-MYL" },
  { id: "115-NUS", label: "115-NUS" },
  { id: "116-RBC", label: "116-RBC" },
  { id: "117-SAS", label: "117-SAS" },
  { id: "118-SPL", label: "118-SPL" },
  { id: "119-TAG", label: "119-TAG" },
  { id: "120-TCC", label: "120-TCC" },
  { id: "121-TLD", label: "121-TLD" },
  { id: "122-TSP", label: "122-TSP" },
  { id: "123-TTT", label: "123-TTT" },
  { id: "124-TKF", label: "124-TKF" },
  { id: "125-VNC", label: "125-VNC" },
];

const VendorFilter = ({ selectedVendor, onVendorChange }: VendorFilterProps) => {
  return (
    <div className="w-full">
      <Select 
        onValueChange={onVendorChange} 
        value={selectedVendor || "all"}
      >
        <SelectTrigger className="neuro-inset rounded-lg w-full">
          <SelectValue placeholder="Filter by vendor" />
        </SelectTrigger>
        <SelectContent className="bg-background border border-border rounded-lg shadow-lg max-h-[300px]">
          <SelectGroup>
            {vendors.map((vendor) => (
              <SelectItem key={vendor.id} value={vendor.id}>
                {vendor.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default VendorFilter;
