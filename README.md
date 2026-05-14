# Multi Vendor E-Commerce Database Design

## Project Overview

This project is a beginner-level multi-vendor e-commerce database design inspired by platforms like Daraz.

The main focus of this system is the **"Add Product" workflow** for vendors.

This database was designed using normalization concepts, relationships, constraints, and scalable structure thinking.

---

# Main Features

- Multi-role user system
- Vendor shop management
- Vendor KYC verification
- Product category & brand management
- Product variants support
- Multiple product images
- Product review & rating system
- Soft delete support
- RBAC (Role-Based Access Control)
- Product status management

---

# Database Tables

## User & Authentication
- users
- roles
- userRoles

## Vendor Management
- vendors
- vendorKYC

## Product Management
- products
- productVariants
- productImages
- categories
- brands

## Review System
- productReviews

---

# ER Diagram

DBDiagram Link:

[View ER Diagram on dbdiagram.io](https://dbdiagram.io/d/6a0513d454a51d93d3217587)