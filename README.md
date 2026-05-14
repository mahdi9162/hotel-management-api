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


# SQL Interview Q&A

**1) What is the difference between Primary Key and Foreign Key?**

**Ans:**

💠 **Primary Key (PK)** :- It uniquely identifies every row of a table. Like -

```
---users---
id
name
```

Here the `id` is the Primary Key, because it won't be duplicate, null, and it identifies every user separately.

💠 **Foreign Key (FK)** :- It connects one table to another table. Like -

```
---products---
vendorId
```

Here the `vendorId` is the Foreign Key, because it references `vendors.id`.

So in short, Primary Key identifies its own table uniquely, and Foreign Key creates a relation to another table.

---

**2) Why is normalization important?**

**Ans:**

Normalization is important because —

- It decreases duplicate data
- It keeps the database clean
- It improves scalability
- It decreases inconsistency

**Example (Bad Design) :**

```
users
------
name
course1
course2
course3
```

⬆️ This is not scalable.

**Example (Normalized Design) :**

```
users
courses
enrollments
```

⬆️ Now it has a clean relation, reusable structure, and easy maintenance.

So in short, Normalization helps organize data efficiently by reducing duplication and improving database consistency.

---

**3) What is a JOIN?**

**Ans:**

JOIN is basically used for getting data from multiple tables.

**Example :**

```
-----------
products
vendors
```

If the product's vendor name is required, then we use JOIN.

**Example Concept :**

```
products.vendorId = vendors.id
```

Data is combined based on this relationship.

So in short, JOIN is used to combine related data from multiple tables using relationships like Primary Key and Foreign Key.

---

**4) What is the difference between SQL and MongoDB?**

**Ans:**

💠 **SQL** :- It is a relational database. It stores data in tables with rows and columns. Like -

```
---users---
id | name | email
```

Here the structure is fixed. We have to define the schema first, then insert data.

💠 **MongoDB** :- It is a non-relational database (NoSQL). It stores data in documents like JSON. Like -

```json
{
  "_id": "1",
  "name": "Mahdi",
  "email": "mahdi@gmail.com"
}
```

Here the structure is flexible. Every document can have different fields.

So in short, SQL is structured and table-based, and MongoDB is flexible and document-based. SQL is better for complex relations, MongoDB is better for flexible or large-scale data.

---

**5) What is a Composite Key?**

**Ans:**

Composite Key is when two or more columns together work as a Primary Key.

Example :

```
---enrollments---
userId
courseId
```

Here `userId` alone is not unique, and `courseId` alone is not unique. But `userId + courseId` together is unique, because one user can enroll in one course only once.

So in short, when a single column can't uniquely identify a row, we combine multiple columns to make a Composite Key.

---

**6) What is a Weak Entity?**

**Ans:**

A Weak Entity is an entity that can't be identified by its own. It depends on another entity to exist.

Example :

```
---orders---        ---orderItems---
id                  orderId
                    productId
```

Here `orderItems` is the Weak Entity, because without `orderId` it has no meaning. If the order is deleted, the order items also have no existence.

So in short, a Weak Entity depends on a Strong Entity to be identified. It can't exist alone.

---

**7) Why do we use Constraints?**

**Ans:**

Constraints are used to protect data quality in the database.

Example (Without Constraints) :

```
---users---
id: NULL          ❌
name: NULL        ❌
email: duplicate  ❌
```

⬆️ This creates dirty and inconsistent data.

Example (With Constraints) :

```
id     → PRIMARY KEY      (unique + not null)
name   → NOT NULL         (can't be empty)
email  → UNIQUE           (no duplicates)
age    → CHECK (age > 0)  (invalid value blocked)
```

⬆️ Now the data is always clean and valid.

So in short, Constraints make sure that wrong, duplicate, or empty data can't enter the database.

---

**8) Explain Many-to-Many Relationship.**

**Ans:**

Many-to-Many is when multiple rows of one table are related to multiple rows of another table.

Example :

```
---users---        ---courses---
id                 id
name               title
```

One user can enroll in many courses, and one course can have many users. So it's a Many-to-Many relationship.

But we can't connect them directly. We need a middle table called a **Junction Table**. Like -

```
---enrollments---
userId
courseId
```

So in short, Many-to-Many relationship connects two tables where both sides can have multiple relations, and we always need a junction table to handle it.

---

**9) What is the difference between Clustered and Non-Clustered Index?**

**Ans:**

💠 **Clustered Index** :- It physically sorts and stores the table data based on the index. Like -

```
---users---
id (Clustered Index)
```

Here the rows are physically stored in the order of `id`. A table can have only **one** Clustered Index, because the data can be physically sorted in only one way.

💠 **Non-Clustered Index** :- It creates a separate structure that points to the actual data. Like -

```
---users---
email (Non-Clustered Index)
```

Here the data is not physically sorted by email. The index just stores the email values with pointers to the actual rows. A table can have **multiple** Non-Clustered Indexes.

So in short, Clustered Index sorts the actual data physically, and Non-Clustered Index is a separate pointer structure. Clustered is faster for range queries, Non-Clustered is flexible but takes extra storage.

---

**10) Explain Database Sharding and Partitioning. When would you use each?**

**Ans:**

💠 **Partitioning** :- It splits a large table into smaller pieces, but all pieces stay in the **same database**. Like -

```
---orders_2023---
---orders_2024---
---orders_2025---
```

Here the `orders` table is too large, so we split it by year. It's still in the same server. It improves query performance because now the database searches a smaller chunk.

▪️ Use Partitioning when — your table is too large and queries are getting slow, but one server is still enough.

💠 **Sharding** :- It splits the data across **multiple databases or servers**. Like -

```
Server 1 → users from Bangladesh
Server 2 → users from USA
Server 3 → users from India
```

Here each server has its own data. No single server holds everything. It improves scalability when one server can't handle the load.

▪️ Use Sharding when — your data or traffic is so large that even one powerful server is not enough.

So in short, Partitioning splits data inside one server, Sharding splits data across multiple servers. Partitioning is for performance, Sharding is for massive scale.
