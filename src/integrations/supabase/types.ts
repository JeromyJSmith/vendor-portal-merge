export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      inventory: {
        Row: {
          category: string | null
          created_at: string | null
          id: string
          last_updated: string | null
          price: number | null
          product_id: string
          product_name: string
          quantity: number
          sku: string
          status: string | null
          threshold_low: number | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          price?: number | null
          product_id: string
          product_name: string
          quantity?: number
          sku: string
          status?: string | null
          threshold_low?: number | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: string
          last_updated?: string | null
          price?: number | null
          product_id?: string
          product_name?: string
          quantity?: number
          sku?: string
          status?: string | null
          threshold_low?: number | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
      memory_context: {
        Row: {
          created_at: string | null
          key: string | null
          value: Json | null
        }
        Insert: {
          created_at?: string | null
          key?: string | null
          value?: Json | null
        }
        Update: {
          created_at?: string | null
          key?: string | null
          value?: Json | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          channel: string
          content: string | null
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          receiver_id: string | null
          recipient_id: string | null
          sender_id: string
          sender_name: string
          subject: string | null
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          channel?: string
          content?: string | null
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          receiver_id?: string | null
          recipient_id?: string | null
          sender_id: string
          sender_name: string
          subject?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          channel?: string
          content?: string | null
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          receiver_id?: string | null
          recipient_id?: string | null
          sender_id?: string
          sender_name?: string
          subject?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_link: string | null
          body: string
          content: string | null
          created_at: string | null
          id: string
          priority: string | null
          read: boolean | null
          related_id: string | null
          title: string
          type: string | null
          user_id: string
          vendor_id: string | null
        }
        Insert: {
          action_link?: string | null
          body: string
          content?: string | null
          created_at?: string | null
          id?: string
          priority?: string | null
          read?: boolean | null
          related_id?: string | null
          title: string
          type?: string | null
          user_id: string
          vendor_id?: string | null
        }
        Update: {
          action_link?: string | null
          body?: string
          content?: string | null
          created_at?: string | null
          id?: string
          priority?: string | null
          read?: boolean | null
          related_id?: string | null
          title?: string
          type?: string | null
          user_id?: string
          vendor_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          created_at: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          in_stock: boolean | null
          name: string
          price: number
          sku: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name: string
          price: number
          sku: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name?: string
          price?: number
          sku?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      shopify_products: {
        Row: {
          Barcode: string | null
          "body(HTML)": string | null
          brand_name: string | null
          Category: string | null
          description: string | null
          handle: string | null
          id: string | null
          Images: string | null
          Price: string | null
          product_name: string | null
          Quantity: string | null
          "SEO Description": string | null
          SKU: string | null
          Tags: string | null
          vendor_id: string
        }
        Insert: {
          Barcode?: string | null
          "body(HTML)"?: string | null
          brand_name?: string | null
          Category?: string | null
          description?: string | null
          handle?: string | null
          id?: string | null
          Images?: string | null
          Price?: string | null
          product_name?: string | null
          Quantity?: string | null
          "SEO Description"?: string | null
          SKU?: string | null
          Tags?: string | null
          vendor_id: string
        }
        Update: {
          Barcode?: string | null
          "body(HTML)"?: string | null
          brand_name?: string | null
          Category?: string | null
          description?: string | null
          handle?: string | null
          id?: string | null
          Images?: string | null
          Price?: string | null
          product_name?: string | null
          Quantity?: string | null
          "SEO Description"?: string | null
          SKU?: string | null
          Tags?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
      themes: {
        Row: {
          created_at: string | null
          font_family: string | null
          id: string
          is_active: boolean | null
          name: string | null
          primary_color: string | null
          secondary_color: string | null
          vendor_id: string | null
        }
        Insert: {
          created_at?: string | null
          font_family?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          vendor_id?: string | null
        }
        Update: {
          created_at?: string | null
          font_family?: string | null
          id?: string
          is_active?: boolean | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          vendor_id?: string | null
        }
        Relationships: []
      }
      vendor_settings: {
        Row: {
          company_name: string | null
          contact_email: string | null
          created_at: string | null
          id: string
          settings_json: Json | null
          theme: Json | null
          theme_name: string | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          company_name?: string | null
          contact_email?: string | null
          created_at?: string | null
          id?: string
          settings_json?: Json | null
          theme?: Json | null
          theme_name?: string | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          company_name?: string | null
          contact_email?: string | null
          created_at?: string | null
          id?: string
          settings_json?: Json | null
          theme?: Json | null
          theme_name?: string | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_vendors_with_multiple_active_themes: {
        Args: Record<PropertyKey, never>
        Returns: {
          vendor_id: string
          count: number
        }[]
      }
      run_sql_verification: {
        Args: { sql_script: string }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
